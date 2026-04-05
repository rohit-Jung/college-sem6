import { MockCVE, mockCVEsWithRanking } from './mockData';

export interface SearchQuery {
  library?: string;
  severity?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  cwe?: string;
  cveId?: string;
}

export interface SearchResult {
  query: SearchQuery;
  results: MockCVE[];
  totalResults: number;
  executionTimeMs: number;
}

/**
 * Search CVE database using multiple criteria
 * Ranking: Severity (primary) → PageRank (secondary) → Published date (tertiary)
 */
export function searchCVEs(query: SearchQuery): SearchResult {
  const startTime = performance.now();

  let results: MockCVE[] = [...mockCVEsWithRanking];

  // Filter by CVE ID (exact match) - highest priority
  if (query.cveId) {
    results = results.filter((cve) =>
      cve.id.toUpperCase().includes(query.cveId!.toUpperCase())
    );
  }

  // Filter by library (fuzzy matching)
  if (query.library) {
    const searchTerm = query.library.toLowerCase();
    results = results.filter((cve) => {
      const libraryMatch = cve.library.toLowerCase().includes(searchTerm);
      const vendorMatch = cve.vendor.toLowerCase().includes(searchTerm);
      return libraryMatch || vendorMatch;
    });
  }

  // Filter by CWE (weakness classification)
  if (query.cwe) {
    const cweTerm = query.cwe.toUpperCase();
    results = results.filter((cve) =>
      cve.cwe.toUpperCase().includes(cweTerm)
    );
  }

  // Filter by severity
  if (query.severity) {
    const severityOrder = {
      CRITICAL: 4,
      HIGH: 3,
      MEDIUM: 2,
      LOW: 1,
    };

    const minSeverityLevel = severityOrder[query.severity];
    results = results.filter((cve) => severityOrder[cve.severity] >= minSeverityLevel);
  }

  // Sort results by:
  // 1. Severity (descending: CRITICAL → HIGH → MEDIUM → LOW)
  // 2. PageRank score (descending)
  // 3. Publication date (newest first)
  results.sort((a, b) => {
    const severityOrder = {
      CRITICAL: 4,
      HIGH: 3,
      MEDIUM: 2,
      LOW: 1,
    };

    const aLevel = severityOrder[a.severity];
    const bLevel = severityOrder[b.severity];

    // Primary sort: severity
    if (aLevel !== bLevel) {
      return bLevel - aLevel;
    }

    // Secondary sort: PageRank score
    if (a.pageRankScore !== b.pageRankScore) {
      return b.pageRankScore - a.pageRankScore;
    }

    // Tertiary sort: publication date (newest first)
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  const endTime = performance.now();

  return {
    query,
    results,
    totalResults: results.length,
    executionTimeMs: Math.round(endTime - startTime),
  };
}

/**
 * Get suggested search queries for demo purposes
 */
export function getSuggestedQueries(): SearchQuery[] {
  return [
    { library: 'openssl', severity: 'HIGH' },
    { library: 'log4j', severity: 'CRITICAL' },
    { library: 'jquery', severity: 'MEDIUM' },
    { cveId: 'CVE-2021-44228' },
    { cwe: 'CWE-94' },
  ];
}

/**
 * Get statistics about the CVE database
 */
export function getCVEStatistics() {
  const all = mockCVEsWithRanking;

  const bySeverity = {
    CRITICAL: all.filter((c) => c.severity === 'CRITICAL').length,
    HIGH: all.filter((c) => c.severity === 'HIGH').length,
    MEDIUM: all.filter((c) => c.severity === 'MEDIUM').length,
    LOW: all.filter((c) => c.severity === 'LOW').length,
  };

  const uniqueLibraries = new Set(all.map((c) => c.library)).size;

  const mostRecentDate = new Date(Math.max(...all.map((c) => new Date(c.published).getTime())));
  const oldestDate = new Date(Math.min(...all.map((c) => new Date(c.published).getTime())));

  return {
    totalCVEs: all.length,
    bySeverity,
    uniqueLibraries,
    dateRange: {
      newest: mostRecentDate.toISOString(),
      oldest: oldestDate.toISOString(),
    },
  };
}
