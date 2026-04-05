// Mock CVE data based on NVD API structure
// Curated dataset of real and representative CVEs for demo

export interface MockCVE {
  id: string;
  library: string;
  vendor: string;
  version: string;
  cvss: number;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  cwe: string;
  cweName: string;
  description: string;
  published: string;
  pageRankScore: number;
  attackVector: 'NETWORK' | 'ADJACENT' | 'LOCAL' | 'PHYSICAL';
  affectedVersions: string[];
}

export const mockCVEs: MockCVE[] = [
  // OpenSSL CVEs
  {
    id: 'CVE-2021-3449',
    library: 'openssl',
    vendor: 'openssl',
    version: '1.1.1, 1.0.2',
    cvss: 7.5,
    severity: 'HIGH',
    cwe: 'CWE-20',
    cweName: 'Improper Input Validation',
    description: 'OpenSSL TLS 1.0-1.2 server uses an incorrect peer MAC length in the event of a failed decrypt',
    published: '2021-03-25',
    pageRankScore: 0.82,
    attackVector: 'NETWORK',
    affectedVersions: ['1.0.2 before 1.0.2s', '1.1.1 before 1.1.1k'],
  },
  {
    id: 'CVE-2016-2183',
    library: 'openssl',
    vendor: 'openssl',
    version: '1.0.1, 1.0.2',
    cvss: 6.8,
    severity: 'MEDIUM',
    cwe: 'CWE-327',
    cweName: 'Use of a Broken or Risky Cryptographic Algorithm',
    description: 'The DES and Triple DES ciphers, as used in the TLS, SSH, and IPSec protocols and other protocols and products, have a birthday bound of approximately four billion blocks',
    published: '2016-09-01',
    pageRankScore: 0.71,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 1.1.0g', 'Before 1.0.2i'],
  },
  {
    id: 'CVE-2022-0922',
    library: 'openssl',
    vendor: 'openssl',
    version: '3.0.0',
    cvss: 6.5,
    severity: 'MEDIUM',
    cwe: 'CWE-476',
    cweName: 'NULL Pointer Dereference',
    description: 'Infinite loop in BN_mod_sqrt() reachable when parsing certificates containing malformed ec parameters x9_62_characteristic_two_field',
    published: '2022-03-15',
    pageRankScore: 0.65,
    attackVector: 'NETWORK',
    affectedVersions: ['3.0.0 before 3.0.3'],
  },

  // Log4j CVEs
  {
    id: 'CVE-2021-44228',
    library: 'log4j',
    vendor: 'apache',
    version: '2.0-beta9 to 2.14.1',
    cvss: 10.0,
    severity: 'CRITICAL',
    cwe: 'CWE-94',
    cweName: 'Improper Control of Generation of Code (Code Injection)',
    description: 'Apache Log4j2 2.0-beta9 through 2.15.0 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints',
    published: '2021-12-10',
    pageRankScore: 0.95,
    attackVector: 'NETWORK',
    affectedVersions: ['2.0-beta9 to 2.14.1'],
  },
  {
    id: 'CVE-2021-45046',
    library: 'log4j',
    vendor: 'apache',
    version: '2.0-beta9 to 2.16.1',
    cvss: 9.0,
    severity: 'CRITICAL',
    cwe: 'CWE-502',
    cweName: 'Deserialization of Untrusted Data',
    description: 'Apache Log4j2 does not validate the resulting EventMap attributes when deserializing JNDI Events',
    published: '2021-12-14',
    pageRankScore: 0.92,
    attackVector: 'NETWORK',
    affectedVersions: ['2.0-beta9 to 2.16.1'],
  },
  {
    id: 'CVE-2020-9496',
    library: 'log4j',
    vendor: 'apache',
    version: '2.0-alpha1 to 2.13.3',
    cvss: 9.8,
    severity: 'CRITICAL',
    cwe: 'CWE-94',
    cweName: 'Improper Control of Generation of Code',
    description: 'Deserialization of untrusted data in Log4j message parameter parsing',
    published: '2020-07-01',
    pageRankScore: 0.88,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 2.13.4'],
  },

  // jQuery CVEs
  {
    id: 'CVE-2020-11023',
    library: 'jquery',
    vendor: 'jquery',
    version: '3.4.1, 3.5.0',
    cvss: 6.1,
    severity: 'MEDIUM',
    cwe: 'CWE-79',
    cweName: 'Improper Neutralization of Input During Web Page Generation (Cross-site Scripting)',
    description: 'jQuery before 3.5.0 has an untrusted jQuery.html() interpretation problem for HTML containing <option> elements from untrusted sources',
    published: '2020-05-20',
    pageRankScore: 0.78,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 3.5.0'],
  },
  {
    id: 'CVE-2019-11358',
    library: 'jquery',
    vendor: 'jquery',
    version: '3.4.0 and before',
    cvss: 6.1,
    severity: 'MEDIUM',
    cwe: 'CWE-79',
    cweName: 'Cross-site Scripting (XSS)',
    description: 'jQuery before 3.4.0 has a type confusion vulnerability in serialize. Prototype pollution attack vector',
    published: '2019-06-03',
    pageRankScore: 0.85,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 3.4.0', '1.x before 1.12.4', '2.x before 2.2.4'],
  },

  // Lodash CVEs
  {
    id: 'CVE-2021-23337',
    library: 'lodash',
    vendor: 'lodash',
    version: 'Before 4.7.11',
    cvss: 6.1,
    severity: 'MEDIUM',
    cwe: 'CWE-94',
    cweName: 'Improper Control of Generation of Code',
    description: 'Lodash allows arbitrary code execution via template injection in the template function',
    published: '2021-02-01',
    pageRankScore: 0.79,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 4.7.11'],
  },
  {
    id: 'CVE-2018-3721',
    library: 'lodash',
    vendor: 'lodash',
    version: 'Before 4.17.11',
    cvss: 7.5,
    severity: 'HIGH',
    cwe: 'CWE-94',
    cweName: 'Improper Control of Generation of Code',
    description: 'Prototype pollution in lodash via defaultsDeep()',
    published: '2018-12-04',
    pageRankScore: 0.81,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 4.17.11'],
  },

  // Django CVEs
  {
    id: 'CVE-2021-32661',
    library: 'django',
    vendor: 'djangoproject',
    version: '2.2, 3.1, 3.2',
    cvss: 7.5,
    severity: 'HIGH',
    cwe: 'CWE-444',
    cweName: 'Inconsistent Interpretation of HTTP Requests (HTTP Request Smuggling)',
    description: 'Django allows HTTP request smuggling via whitespace characters before a colon in HTTP request headers',
    published: '2021-07-01',
    pageRankScore: 0.84,
    attackVector: 'NETWORK',
    affectedVersions: ['2.2 before 2.2.24', '3.1 before 3.1.13', '3.2 before 3.2.5'],
  },
  {
    id: 'CVE-2020-14040',
    library: 'django',
    vendor: 'djangoproject',
    version: '1.11, 2.2, 3.0, 3.1',
    cvss: 5.7,
    severity: 'MEDIUM',
    cwe: 'CWE-400',
    cweName: 'Uncontrolled Resource Consumption',
    description: 'Django allows excessive memory usage via a large HTTP request body with CR and LF characters',
    published: '2020-08-03',
    pageRankScore: 0.72,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 1.11.29', 'Before 2.2.17', 'Before 3.0.11', 'Before 3.1.3'],
  },

  // Spring Framework CVEs
  {
    id: 'CVE-2022-22963',
    library: 'spring-cloud-function',
    vendor: 'spring',
    version: '3.1.0 to 3.1.6, 3.2.0 to 3.2.4',
    cvss: 9.8,
    severity: 'CRITICAL',
    cwe: 'CWE-94',
    cweName: 'Code Injection',
    description: 'Spring Cloud Function SpEL Expression Injection via routing-expression header',
    published: '2022-03-29',
    pageRankScore: 0.91,
    attackVector: 'NETWORK',
    affectedVersions: ['3.1.0 to 3.1.6', '3.2.0 to 3.2.4'],
  },
  {
    id: 'CVE-2022-22947',
    library: 'spring-cloud-gateway',
    vendor: 'spring',
    version: '3.1.0 to 3.1.2, 3.0.0 to 3.0.6',
    cvss: 9.0,
    severity: 'CRITICAL',
    cwe: 'CWE-917',
    cweName: 'Expression Language Injection',
    description: 'Spring Cloud Gateway SpEL Expression Injection in route predicates',
    published: '2022-03-23',
    pageRankScore: 0.89,
    attackVector: 'NETWORK',
    affectedVersions: ['3.1.0 to 3.1.2', '3.0.0 to 3.0.6'],
  },

  // Nginx CVEs
  {
    id: 'CVE-2022-26635',
    library: 'nginx',
    vendor: 'nginx',
    version: 'Before 1.23.0',
    cvss: 8.6,
    severity: 'HIGH',
    cwe: 'CWE-444',
    cweName: 'Inconsistent Interpretation of HTTP Requests',
    description: 'Nginx HTTP/2 module buffer overflow in h2c processing',
    published: '2022-04-12',
    pageRankScore: 0.83,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 1.23.0'],
  },
  {
    id: 'CVE-2021-3618',
    library: 'nginx',
    vendor: 'nginx',
    version: 'Before 1.21.0',
    cvss: 7.5,
    severity: 'HIGH',
    cwe: 'CWE-401',
    cweName: 'Missing Release of Memory after Effective Lifetime',
    description: 'Nginx HTTP/2 stream priority DoS vulnerability',
    published: '2021-06-16',
    pageRankScore: 0.76,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 1.21.0'],
  },

  // PostgreSQL CVEs
  {
    id: 'CVE-2022-1552',
    library: 'postgresql',
    vendor: 'postgresql',
    version: '14.0 to 14.2, 13.0 to 13.6, 12.0 to 12.10',
    cvss: 8.8,
    severity: 'HIGH',
    cwe: 'CWE-89',
    cweName: 'SQL Injection',
    description: 'PostgreSQL arbitrary code execution via CREATE SCHEMA and CREATE TABLE LIKE commands',
    published: '2022-05-09',
    pageRankScore: 0.87,
    attackVector: 'NETWORK',
    affectedVersions: ['14.0 to 14.2', '13.0 to 13.6', '12.0 to 12.10'],
  },
  {
    id: 'CVE-2021-32027',
    library: 'postgresql',
    vendor: 'postgresql',
    version: '11.x, 12.x, 13.x',
    cvss: 6.5,
    severity: 'MEDIUM',
    cwe: 'CWE-119',
    cweName: 'Improper Restriction of Operations within the Bounds of a Memory Buffer',
    description: 'PostgreSQL numeric type buffer overflow',
    published: '2021-05-11',
    pageRankScore: 0.74,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 11.12', 'Before 12.7', 'Before 13.3'],
  },

  // React CVEs
  {
    id: 'CVE-2020-5902',
    library: 'react',
    vendor: 'facebook',
    version: 'Before 16.13.0',
    cvss: 6.1,
    severity: 'MEDIUM',
    cwe: 'CWE-79',
    cweName: 'Cross-site Scripting',
    description: 'React JSX markdown rendering allows arbitrary code execution',
    published: '2020-06-08',
    pageRankScore: 0.80,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 16.13.0'],
  },

  // Node.js CVEs
  {
    id: 'CVE-2022-21824',
    library: 'node.js',
    vendor: 'nodejs',
    version: 'Before 12.22.11, 14.x before 14.19.0, 16.x before 16.14.2, 17.x before 17.5.0',
    cvss: 7.5,
    severity: 'HIGH',
    cwe: 'CWE-400',
    cweName: 'Uncontrolled Resource Consumption',
    description: 'Node.js HTTP Request Smuggling vulnerability in parsing of header fields',
    published: '2022-02-17',
    pageRankScore: 0.90,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 12.22.11', '14.x before 14.19.0', '16.x before 16.14.2'],
  },

  // Express.js CVE
  {
    id: 'CVE-2022-24999',
    library: 'express',
    vendor: 'expressjs',
    version: 'Before 4.18.1',
    cvss: 7.5,
    severity: 'HIGH',
    cwe: 'CWE-444',
    cweName: 'Inconsistent Interpretation of HTTP Requests',
    description: 'Express.js request smuggling vulnerability via qs parsing in query strings',
    published: '2022-06-10',
    pageRankScore: 0.86,
    attackVector: 'NETWORK',
    affectedVersions: ['Before 4.18.1'],
  },
];

// Utility function to calculate total network centrality
export function calculatePageRankScores(cves: MockCVE[]): MockCVE[] {
  // Group by library
  const libraryGroups: { [key: string]: MockCVE[] } = {};
  cves.forEach((cve) => {
    if (!libraryGroups[cve.library]) {
      libraryGroups[cve.library] = [];
    }
    libraryGroups[cve.library].push(cve);
  });

  // Calculate simple PageRank-like score based on:
  // 1. Severity (CRITICAL: 1.0, HIGH: 0.7, MEDIUM: 0.4, LOW: 0.2)
  // 2. Number of vulnerabilities in same library (interconnectedness)
  // 3. Recency (newer = higher score)
  return cves.map((cve) => {
    const severityMultiplier = {
      CRITICAL: 1.0,
      HIGH: 0.7,
      MEDIUM: 0.4,
      LOW: 0.2,
    }[cve.severity];

    const libraryCount = libraryGroups[cve.library].length;
    const interconnectedness = Math.min(libraryCount / 10, 1); // Normalize to 0-1

    const publishDate = new Date(cve.published).getTime();
    const now = new Date().getTime();
    const daysSincePublished = (now - publishDate) / (1000 * 60 * 60 * 24);
    const recencyScore = Math.max(0.5, 1 - daysSincePublished / 3650); // Decay over 10 years

    const basePageRank = 0.5;
    const prScore = basePageRank +
      severityMultiplier * 0.3 +
      interconnectedness * 0.1 +
      recencyScore * 0.1;

    return {
      ...cve,
      pageRankScore: Math.min(prScore, 0.99),
    };
  });
}

// Export processed mock data with PageRank scores
export const mockCVEsWithRanking = calculatePageRankScores(mockCVEs);
