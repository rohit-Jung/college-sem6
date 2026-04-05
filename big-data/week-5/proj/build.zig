const std = @import("std");

pub fn build(b: *std.Build) void {
    const target = b.standardTargetOptions(.{});
    const optimize = b.standardOptimizeOption(.{});

    const exe = b.addExecutable(.{
        .name = "search-engine",
        .target = target,
        .optimize = optimize,
    });

    exe.addCSourceFile(.{
        .file = .{
            .src_path = .{
                .owner = b,
                .sub_path = "src/main.zig",
            },
        },
    });

    b.installArtifact(exe);

    const run_cmd = b.addRunArtifact(exe);
    if (b.args) |args| {
        run_cmd.addArgs(args);
    }

    const run_step = b.step("run", "Run the search engine");
    run_step.dependOn(&run_cmd.step);
}
