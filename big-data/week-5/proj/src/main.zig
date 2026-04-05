const std = @import("std");
const mem = std.mem;

pub const Allocator = mem.Allocator;

// ============================================================================
// DATA STRUCTURES
// ============================================================================

pub const CVERecord = struct {
    cve_id: []const u8,
    description: []const u8,
    published: []const u8,
    base_score: ?f32 = null,
};

pub const SearchResult = struct {
    cve_id: []const u8,
    description: []const u8,
    score: f32,
};

pub const ScoreResult = struct {
    idx: usize,
    score: f32,
};

// ============================================================================
// SIMPLE SEARCH ENGINE
// ============================================================================

pub const SimpleSearchEngine = struct {
    allocator: Allocator,
    cves: std.ArrayList(CVERecord),
    index: std.StringHashMap(std.ArrayList(usize)), // term -> cve indices

    pub fn init(allocator: Allocator) !SimpleSearchEngine {
        return .{
            .allocator = allocator,
            .cves = try std.ArrayList(CVERecord).initCapacity(allocator, 1000),
            .index = std.StringHashMap(std.ArrayList(usize)).init(allocator),
        };
    }

    pub fn deinit(self: *SimpleSearchEngine) void {
        for (self.cves.items) |cve| {
            self.allocator.free(cve.cve_id);
            self.allocator.free(cve.description);
            self.allocator.free(cve.published);
        }
        self.cves.deinit(self.allocator);

        var it = self.index.iterator();
        while (it.next()) |entry| {
            self.allocator.free(entry.key_ptr.*);
            entry.value_ptr.deinit(self.allocator);
        }
        self.index.deinit();
    }

    fn tokenize(self: *SimpleSearchEngine, text: []const u8) !std.ArrayList([]const u8) {
        var tokens = try std.ArrayList([]const u8).initCapacity(self.allocator, 32);
        var iter = mem.splitSequence(u8, text, " ");

        while (iter.next()) |token| {
            if (token.len == 0) continue;
            // Remove punctuation and convert to lowercase
            var pos: usize = 0;
            for (token) |char| {
                if ((char >= 'a' and char <= 'z') or
                    (char >= 'A' and char <= 'Z') or
                    (char >= '0' and char <= '9') or
                    char == '-' or char == '_')
                {
                    pos += 1;
                }
            }
            if (pos > 0) {
                var clean_token = try self.allocator.alloc(u8, pos);
                var write_pos: usize = 0;
                for (token) |char| {
                    if ((char >= 'a' and char <= 'z') or
                        (char >= 'A' and char <= 'Z') or
                        (char >= '0' and char <= '9') or
                        char == '-' or char == '_')
                    {
                        clean_token[write_pos] = std.ascii.toLower(char);
                        write_pos += 1;
                    }
                }
                try tokens.append(self.allocator, clean_token);
            }
        }
        return tokens;
    }

    pub fn addCVE(self: *SimpleSearchEngine, cve_id: []const u8, description: []const u8, published: []const u8, base_score: ?f32) !void {
        const cve = CVERecord{
            .cve_id = try self.allocator.dupe(u8, cve_id),
            .description = try self.allocator.dupe(u8, description),
            .published = try self.allocator.dupe(u8, published),
            .base_score = base_score,
        };

        const cve_index = self.cves.items.len;
        try self.cves.append(self.allocator, cve);

        // Index description
        var desc_tokens = try self.tokenize(description);
        for (desc_tokens.items) |token| {
            try self.indexTermOnce(token, cve_index);
        }
        for (desc_tokens.items) |token| {
            self.allocator.free(token);
        }
        desc_tokens.deinit(self.allocator);

        // Index CVE ID (without freeing since we don't allocate new tokens here)
        var id_tokens = try self.tokenize(cve_id);
        for (id_tokens.items) |token| {
            try self.indexTermOnce(token, cve_index);
        }
        for (id_tokens.items) |token| {
            self.allocator.free(token);
        }
        id_tokens.deinit(self.allocator);
    }

    fn indexTermOnce(self: *SimpleSearchEngine, term: []const u8, cve_index: usize) !void {
        if (term.len == 0) return;

        if (self.index.getPtr(term)) |indices| {
            // Check if already indexed
            for (indices.items) |idx| {
                if (idx == cve_index) {
                    return;
                }
            }
            try indices.append(self.allocator, cve_index);
        } else {
            const term_copy = try self.allocator.dupe(u8, term);
            var indices = try std.ArrayList(usize).initCapacity(self.allocator, 10);
            try indices.append(self.allocator, cve_index);
            try self.index.put(term_copy, indices);
        }
    }

    pub fn search(self: *SimpleSearchEngine, query: []const u8, max_results: usize) !std.ArrayList(SearchResult) {
        var results = try std.ArrayList(SearchResult).initCapacity(self.allocator, max_results);

        var query_tokens = try self.tokenize(query);
        defer {
            for (query_tokens.items) |token| {
                self.allocator.free(token);
            }
            query_tokens.deinit(self.allocator);
        }

        if (query_tokens.items.len == 0) return results;

        // Collect matching CVEs with scores
        var scores = std.AutoHashMap(usize, f32).init(self.allocator);
        defer scores.deinit();

        for (query_tokens.items) |token| {
            if (self.index.get(token)) |indices| {
                for (indices.items) |idx| {
                    const current = scores.get(idx) orelse 0.0;
                    try scores.put(idx, current + 1.0);
                }
            }
        }

        // Build sorted results
        var scored_results = try std.ArrayList(ScoreResult).initCapacity(self.allocator, 100);
        defer scored_results.deinit(self.allocator);

        var score_it = scores.iterator();
        while (score_it.next()) |entry| {
            try scored_results.append(self.allocator, .{
                .idx = entry.key_ptr.*,
                .score = entry.value_ptr.*,
            });
        }

        // Sort by score descending
        const SortContext = struct {
            fn cmp(_: void, a: ScoreResult, b: ScoreResult) bool {
                return a.score > b.score;
            }
        };
        std.mem.sortUnstable(ScoreResult, scored_results.items, {}, SortContext.cmp);

        const limit = @min(max_results, scored_results.items.len);
        for (0..limit) |i| {
            const idx = scored_results.items[i].idx;
            const cve = self.cves.items[idx];
            const desc_len = @min(200, cve.description.len);
            try results.append(self.allocator, .{
                .cve_id = cve.cve_id,
                .description = cve.description[0..desc_len],
                .score = scored_results.items[i].score,
            });
        }

        return results;
    }

    pub fn printStats(self: *SimpleSearchEngine) void {
        std.debug.print("=== CVE Search Engine ===\n", .{});
        std.debug.print("CVEs indexed: {d}\n", .{self.cves.items.len});
        std.debug.print("Unique terms: {d}\n", .{self.index.count()});
    }
};

// ============================================================================
// JSON PARSER FOR CVE DATA
// ============================================================================

pub const SimpleJSONParser = struct {
    allocator: Allocator,
    data: []const u8,
    pos: usize = 0,

    pub fn init(allocator: Allocator, data: []const u8) SimpleJSONParser {
        return .{
            .allocator = allocator,
            .data = data,
        };
    }

    fn skipWhitespace(self: *SimpleJSONParser) void {
        while (self.pos < self.data.len) {
            const c = self.data[self.pos];
            if (c != ' ' and c != '\t' and c != '\n' and c != '\r') break;
            self.pos += 1;
        }
    }

    fn skipToKey(self: *SimpleJSONParser, key: []const u8) bool {
        const search_str = try self.allocator.alloc(u8, key.len + 3);
        defer self.allocator.free(search_str);
        search_str[0] = '"';
        mem.copy(u8, search_str[1..], key);
        search_str[key.len + 1] = '"';
        search_str[key.len + 2] = ':';

        if (mem.indexOf(u8, self.data[self.pos..], search_str)) |offset| {
            self.pos += offset + search_str.len;
            self.skipWhitespace();
            return true;
        }
        return false;
    }

    fn parseString(self: *SimpleJSONParser) ?[]const u8 {
        self.skipWhitespace();
        if (self.pos >= self.data.len or self.data[self.pos] != '"') return null;
        self.pos += 1;

        const start = self.pos;
        var escaped = false;
        while (self.pos < self.data.len) {
            const c = self.data[self.pos];
            if (escaped) {
                escaped = false;
                self.pos += 1;
                continue;
            }
            if (c == '\\') {
                escaped = true;
                self.pos += 1;
                continue;
            }
            if (c == '"') {
                const result = self.data[start..self.pos];
                self.pos += 1;
                return result;
            }
            self.pos += 1;
        }
        return null;
    }

    fn parseNumber(self: *SimpleJSONParser) ?f32 {
        self.skipWhitespace();
        const start = self.pos;

        if (self.pos < self.data.len and self.data[self.pos] == '-') {
            self.pos += 1;
        }

        var has_digit = false;
        while (self.pos < self.data.len and self.data[self.pos] >= '0' and self.data[self.pos] <= '9') {
            has_digit = true;
            self.pos += 1;
        }

        if (self.pos < self.data.len and self.data[self.pos] == '.') {
            self.pos += 1;
            while (self.pos < self.data.len and self.data[self.pos] >= '0' and self.data[self.pos] <= '9') {
                has_digit = true;
                self.pos += 1;
            }
        }

        if (!has_digit) return null;
        return std.fmt.parseFloat(f32, self.data[start..self.pos]) catch null;
    }
};

// ============================================================================
// MAIN
// ============================================================================

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    std.debug.print("CVE Search Engine with NVD Data\n", .{});
    std.debug.print("==================================\n\n", .{});

    var engine = try SimpleSearchEngine.init(allocator);
    defer engine.deinit();

    // Try to load CVEs from file
    const file = std.fs.cwd().openFile("data/cves.json", .{}) catch |err| {
        std.debug.print("Error: Could not open data/cves.json: {}\n", .{err});
        std.debug.print("Adding sample CVE data instead...\n\n", .{});

        // Add sample data
        try engine.addCVE("CVE-2024-1234", "SQL Injection vulnerability in web application", "2024-01-15", 9.8);
        try engine.addCVE("CVE-2024-5678", "Remote code execution in database service", "2024-02-20", 10.0);
        try engine.addCVE("CVE-2024-9012", "Cross-site scripting XSS in authentication module", "2024-03-10", 7.5);
        try engine.addCVE("CVE-2024-3456", "Buffer overflow in network stack", "2024-01-25", 8.6);
        try engine.addCVE("CVE-2023-7890", "Privilege escalation through kernel vulnerability", "2023-12-05", 9.1);

        engine.printStats();
        std.debug.print("\n", .{});

        // Test queries
        const queries = [_][]const u8{
            "SQL injection",
            "remote code execution",
            "vulnerability",
            "authentication",
            "buffer overflow",
        };

        for (queries) |query| {
            std.debug.print("Query: \"{s}\"\n", .{query});
            std.debug.print("---\n", .{});

            var results = try engine.search(query, 3);
            defer results.deinit(allocator);

            if (results.items.len == 0) {
                std.debug.print("No results found.\n", .{});
            } else {
                for (results.items, 0..) |result, i| {
                    std.debug.print("{d}. [{s}] Score: {d:.1}\n", .{ i + 1, result.cve_id, result.score });
                    std.debug.print("   {s}\n\n", .{result.description});
                }
            }
        }
        return;
    };

    defer file.close();

    // Read entire file
    const file_size = try file.getEndPos();
    const file_data = try allocator.alloc(u8, file_size);
    defer allocator.free(file_data);

    _ = try file.readAll(file_data);

    // Parse JSON and extract CVEs
    std.debug.print("Parsing CVE JSON data...\n", .{});

    // Simple extraction: find all CVE IDs and descriptions
    var cve_count: u32 = 0;
    var search_pos: usize = 0;

    while (search_pos < file_data.len and cve_count < 200) {
        // Find "id" field
        if (mem.indexOf(u8, file_data[search_pos..], "\"id\":\"")) |offset| {
            search_pos += offset + 6;
            const id_start = search_pos;

            // Find end of ID
            if (mem.indexOf(u8, file_data[search_pos..], "\"")) |id_offset| {
                const cve_id = file_data[id_start .. search_pos + id_offset];
                search_pos += id_offset + 1;

                // Find description
                if (mem.indexOf(u8, file_data[search_pos..], "\"value\":\"")) |desc_offset| {
                    search_pos += desc_offset + 9;
                    const desc_start = search_pos;

                    // Find end of description (accounting for escaped quotes)
                    var escaped = false;
                    while (search_pos < file_data.len) {
                        if (file_data[search_pos] == '\\') {
                            escaped = !escaped;
                            search_pos += 1;
                        } else if (file_data[search_pos] == '"' and !escaped) {
                            break;
                        } else {
                            escaped = false;
                            search_pos += 1;
                        }
                    }

                    const description = file_data[desc_start..search_pos];

                    // Find published date
                    if (mem.indexOf(u8, file_data[search_pos..], "\"published\":\"")) |pub_offset| {
                        search_pos += pub_offset + 13;
                        const pub_start = search_pos;

                        if (mem.indexOf(u8, file_data[search_pos..], "\"")) |pub_end| {
                            const published = file_data[pub_start .. search_pos + pub_end];
                            search_pos += pub_end;

                            // Add to engine
                            try engine.addCVE(cve_id, description, published, null);
                            cve_count += 1;
                        }
                    }
                } else {
                    search_pos += 10;
                }
            } else {
                search_pos += 1;
            }
        } else {
            break;
        }
    }

    engine.printStats();
    std.debug.print("\n", .{});

    // Test queries
    const queries = [_][]const u8{
        "vulnerability",
        "injection",
        "execution",
        "overflow",
        "authentication",
    };

    for (queries) |query| {
        std.debug.print("Query: \"{s}\"\n", .{query});
        std.debug.print("---\n", .{});

        var results = try engine.search(query, 5);
        defer results.deinit(allocator);

        if (results.items.len == 0) {
            std.debug.print("No results found.\n", .{});
        } else {
            for (results.items, 0..) |result, i| {
                std.debug.print("{d}. [{s}] Score: {d:.1}\n", .{ i + 1, result.cve_id, result.score });
                const snippet_len = @min(100, result.description.len);
                std.debug.print("   {s}...\n\n", .{result.description[0..snippet_len]});
            }
        }
    }
}
