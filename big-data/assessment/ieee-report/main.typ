
#import "@preview/mmdr:0.2.2": mermaid
#import "@preview/charged-ieee:0.1.4": ieee

#let StatTotalCVEs = 347667
#let StatIndexableCVEs = 295006
#let StatFilteredRejected = 17521
#let StatFilteredMissingCVSS = 6387
#let StatFilteredMissingConf = 28753
#let StatIDFTerms = 253932
#let bar(val, max, fill: blue) = rect(width: 100% * val / max, height: 1em, fill: fill)
#let StatCVSSMedian = 6.5
#let StatCVSSP90 = 9.3

#show math.equation.where(block: true): it => block(
  inset: (y: 0.5em),
  above: 0.6em,
  below: 0.6em,
)[
  #it
]

#show: ieee.with(
  title: [Comparative Analysis of Hybrid Ranking and SQL-Based Retrieval for Large-Scale NVD CVE Data],
  abstract: [
  Generic information: Vulnerability databases are widely used to support patching and incident response.
  Problem statement: NVD contains a very large number of CVEs, so keyword matches often produce long result sets that are hard to triage. Plain substring selection (e.g., SQL `ILIKE`) can find occurrences but does not naturally rank by relevance or urgency.
  Aim/objective: Build a CVE search engine for NVD and compare ranked retrieval to a plain SQL selection baseline.
  Contributions/methodology: The work (1) acquires and caches NVD CVE 2.0 JSON, (2) filters to an indexable subset, (3) builds an inverted index and BM25 retrieval, and (4) computes a hybrid score that blends BM25, PageRank from a product co-occurrence graph, and normalized CVSS. A small web UI and API expose both the ranked engine and the baseline query for side-by-side comparison.
  Impact: A ranked shortlist can reduce analyst time spent scrolling and improve practical vulnerability triage.
  ],
  authors: (
    (
      name: "Rohit Jung Kathet",
      department: [Computer Science],
      organization: [University of Wolverhampton],
      email: "rokshh28@gmail.com"
    ),
  ),
  index-terms: ("information retrieval", "BM25", "PageRank", "CVSS", "CVE", "NVD", "cybersecurity search"),
  bibliography: bibliography("references.bib"),
  figure-supplement: [Fig.],
)


= Introduction

This artefact is a CVE search engine for the NIST National Vulnerability Database (NVD). It is aimed at a simple but common situation: someone types a short query like "openssl" or "buffer overflow" and expects the system to return a shortlist that is worth reading.

The title requirements for the search-engine option can be answered directly.
1. Information needs supported. Users need to find relevant CVEs for a product or concept and then prioritize what to patch or investigate first.
2. How the problem is solved. The engine indexes CVE descriptions, ranks with BM25, and then blends BM25 with PageRank (from a CVE co-occurrence graph) and CVSS (severity).
3. Targeted domain. Public vulnerability intelligence using NVD CVE 2.0 JSON (descriptions, configurations/CPE, CVSS).

= Background of the study

Generic information. The NVD is large and fast-moving, and its CVE records are commonly used to support patch decisions and incident response.

Problem statement (layman view, with statistics). In the cached NVD CVE 2.0 pages used in this project, the metadata reports `totalResults = ` + str(StatTotalCVEs) + `CVEs (174 pages at 2,000 results/page)`. A plain SQL query like `SELECT ... WHERE description ILIKE '%openssl%'` can tell you whether a term appears, but it does not naturally tell you which results are best for your intent or which ones should be prioritized first. At this scale, the main problem becomes ordering the matches rather than finding any match.

#figure(
  caption: [Filtering breakdown used for ranked indexing (cached corpus).],
  image("./diagrams/data-pie.png")
)

#figure(
  caption: [Severity distribution of indexable CVEs (CVSS base score buckets).],
  table(
    columns: (auto, auto, auto),
    inset: 4pt,
    [CRITICAL (9.0-10.0)], [#bar(36681, StatIndexableCVEs, fill: rgb(183, 28, 28))], [#raw("36681")],
    [HIGH (7.0-8.9)], [#bar(94677, StatIndexableCVEs, fill: rgb(211, 47, 47))], [#raw("94677")],
    [MEDIUM (4.0-6.9)], [#bar(146954, StatIndexableCVEs, fill: rgb(249, 168, 37))], [#raw("146954")],
    [LOW (0.1-3.9)], [#bar(16694, StatIndexableCVEs, fill: rgb(46, 125, 50))], [#raw("16694")],
  ),
)

Aim/objective. Build a search engine that supports common vulnerability search needs and compare it against a baseline plain `SELECT` approach.

Contributions.
1. Cached acquisition pipeline for NVD CVE 2.0 JSON.
2. Filtering policy for indexable CVEs (exclude rejected CVEs, CVEs missing CVSS, and CVEs missing configuration/CPE).
3. Inverted index pipeline (tokenization, TF, IDF, inverted index).
4. Hybrid ranker combining BM25, PageRank, and normalized CVSS.
5. PostgreSQL loader and baseline substring search for comparison.

Information needs (what people search for, and why).
1. Product or library name (e.g., "openssl", "log4j"): to discover all relevant CVEs affecting a dependency.
2. Vulnerability concept (e.g., "buffer overflow", "path traversal"): to learn patterns and find related vulnerabilities.
3. Prioritization: to quickly surface high-severity and central CVEs for triage.

Organisation of the report. The next section summarises related work. The methodology section describes the pipeline and scoring. The artefact section presents the system, UI/API, and a comparison against the plain SQL baseline. The report ends with conclusions.

= Related work

BM25 remains a strong lexical baseline for ranked retrieval and is still actively discussed in IR research @Robertson_2025. Comparative work continues to show that BM25 is competitive and frequently used in hybrid retrieval @Akku__2025.

In cybersecurity, knowledge graphs are used to connect vulnerability entities such as CVE, CWE, and CPE and to support navigation and analysis @Yin_2024 @Shi_2024 @Boles_2025 @Benzekki_2026. Graph methods also appear in vulnerability assessment and explainability pipelines @Nguyen_2025.

This project is not a vulnerability detector. Many recent papers focus on detecting vulnerabilities in source code with deep learning and graph neural networks @Lu_2024 @Jia_2025 @Lekeufack_Foulefack_2026. Instead, the focus here is ranked retrieval over a public CVE collection and a direct comparison against a plain SQL substring baseline.

= Methodology

The workflow follows the module pipeline: acquire data, prepare/process, analyze, index/report, act.

#figure(
  caption: [End-to-end pipeline phases (block diagram).],
  image("./diagrams/methodology.png", height: 300pt)
)

== Acquire data

The system fetches NVD CVE 2.0 pages from the REST API and caches each response under `./data/data-<startIndex>.json`. Caching avoids repeated API calls and makes runs reproducible.

== Prepare/process data

Each CVE is filtered before indexing.
1. Exclude rejected CVEs.
2. Exclude CVEs with no CVSS base score (CVSS v3.1 preferred; otherwise CVSS v2).
3. Exclude CVEs with no configuration/CPE data (required for the graph signal).

Across the cached corpus, the filtering produced `indexable = ` + str(StatIndexableCVEs) + ` CVEs out of ` + str(StatTotalCVEs) + ` total (rejected=` + str(StatFilteredRejected) + `, missing CVSS=` + str(StatFilteredMissingCVSS) + `, missing CPE/config=` + str(StatFilteredMissingConf) + `).`

== Index and retrieval

Tokenization lowercases text, splits on non-alphanumeric characters, removes a small stopword list, drops tokens shorter than 3 characters, and applies stemming.

TF is computed per CVE description. IDF uses `log(N/df)`. The inverted index maps term to postings of (CVE ID, term frequency). BM25 is computed with `k1 = 1.5` and `b = 0.75`.

Retrieval function (BM25) for query terms $q$ and document $d$:

$
"BM25"(q, d) = sum_(t in q)
  "IDF"(t) * ( "tf"(t,d) (k_1 + 1) ) /
  ( "tf"(t,d) + k_1 (1 - b + b * abs(D) / "avgdl") )
$

== Graph signal and PageRank

The graph connects CVEs that share the same affected product extracted from CPE strings. To avoid explosion for common products, the implementation caps links at 50 CVEs per product.

PageRank uses damping `0.85`, an iteration cap of 50, and early stopping on convergence. Scores are normalized to `[0,1]`.

== Hybrid ranking

Signals are normalized: BM25 is min-max normalized, PageRank is normalized, and CVSS is normalized by dividing by 10.

The final score is:
\
$"score" = 0.4 * "bm25_norm" + 0.3 * "pr_norm" + 0.3 * "cvss_norm"$
\

Weights keep text relevance primary, while centrality and severity influence ordering.

== Baseline: plain SQL selection

For comparison, CVEs are loaded into PostgreSQL and queried with:
\
`SELECT ... FROM cves WHERE description ILIKE '%' || $1 || '%' LIMIT k;`
\
This baseline finds matches but does not compute relevance scores.

= Artefact and discussion

== Software architecture

The Go codebase is organized into packages for fetching, parsing, tokenization, ranking, and graph processing. The two user-facing entry points are:
1. `cmd/cverank`: build indexes and return scored top-k results for a query.
2. `cmd/dbsearch`: run the baseline SQL query.

#figure(
  caption: [Software architecture overview (engine + baseline + UI).],
  image("./diagrams/architecture.png", height: 200pt)
)

Baseline path (plain SQL selection): cached JSON -> Postgres `cves` table (with trigram index for `ILIKE`) -> `/api/baseline` -> Web UI.

== Dataset

The cached dataset contains `totalResults = ` + str(StatTotalCVEs) + ` CVEs across 174 pages. After filtering, `indexable = ` + str(StatIndexableCVEs) + ` CVEs are used for ranked retrieval, producing an IDF vocabulary of ` + str(StatIDFTerms) + ` unique stemmed terms. For the indexable subset, CVSS median is ` + str(StatCVSSMedian) + ` and CVSS p90 is ` + str(StatCVSSP90) + `.

#figure(
  caption: [Top products by CVE count in the indexable subset (normalized product names extracted from the first CPE match).],
  image("./diagrams/top-products.png")
)

== Search interface

The project exposes both a CLI and a small web interface.
1. Web UI: run `go-task server` and open `http://localhost:8080`.
2. Scored CLI: `go run ./cmd/cverank/main.go -query openssl -top 5`.
3. SQL baseline CLI: `go run ./cmd/dbsearch/main.go -query openssl -top 5 -order published`.

== Example searches and results

Query: `openssl`.

The baseline SQL query returns CVEs that contain the substring "openssl". If ordered by published date, the top-k results tend to be the most recent matching CVEs, not the most relevant ones.

The scored engine returns results ordered by relevance and then influenced by severity and graph centrality. In one run, the top result was a CVE whose description directly explains an OpenSSL configuration path issue leading to SYSTEM privilege execution, which matches a realistic triage need.

#figure(
  caption: [Example top-5 for query `openssl` with `MinSeverity=HIGH` (engine vs baseline).],
  image("./diagrams/comparison.png")
)

Note: the baseline table can surface CVEs with missing product fields (e.g., missing configuration/CPE). The ranked engine intentionally filters out CVEs without configuration/CPE because PageRank is computed from product co-occurrence.

== Discussion: why plain SELECT differs

Plain SQL selection answers a Boolean question: does the term occur. It can be made fast with indexing, but it does not provide a ranking model.

BM25 answers a different question: how well does a document match the query, based on term weighting and length normalization.

PageRank adds a structural signal from co-occurrence in affected products. CVSS adds a risk-oriented signal useful for triage.

= Conclusion

This project built a search engine over NVD CVEs that supports common vulnerability search tasks and compared it against a baseline plain SQL substring match.
The hybrid ranker combining BM25, PageRank, and CVSS produces a more useful top-k shortlist for triage than a plain `SELECT ... ILIKE ... LIMIT k`.

Future work includes a web interface, evaluation on a fixed query set with relevance judgments, and experimenting with additional ranking signals such as time decay or richer graphs.
