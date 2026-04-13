export default function SolutionSlide() {
  return (
    <div className="w-full h-full" style={{
      backgroundColor: '#f5f4f0',
      color: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0'
    }}>
      {/* METADATA ZONE - Top */}
      <div style={{
        borderBottom: '0.5px solid #c8c6c1',
        padding: '40px 60px 30px 60px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          METHODOLOGY & SOLUTION
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 007
        </div>
      </div>

      {/* ANCHOR ZONE - Display headline */}
      <div style={{
        borderBottom: '0.5px solid #c8c6c1',
        padding: '60px 60px 40px 60px',
        viewTransitionName: 'heading-content'
      }}>
        <h1 style={{
          fontSize: '160px',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: '900',
          lineHeight: '0.85',
          letterSpacing: '-0.03em',
          color: '#0a0a0a',
          margin: '0 0 20px 0',
          textTransform: 'uppercase'
        }}>
          Intelligent<br />CVE Search
        </h1>

        {/* Red accent bar */}
        <div style={{
          width: '120px',
          height: '8px',
          backgroundColor: '#d4564f'
        }} />
      </div>

      {/* THREE CAPABILITIES - Flex columns with monospace borders */}
      <div style={{
        flex: 1,
        display: 'flex',
        borderBottom: '0.5px solid #c8c6c1'
      }}>
        {[
          {
            label: 'SEVERITY RANKING',
            title: 'CVSS Prioritization',
            description: 'Find vulnerabilities by CVSS scores and impact severity across all indexed systems'
          },
          {
            label: 'LIBRARY MATCHING',
            title: 'CPE Accuracy',
            description: 'Precise product matching covering 342,000+ CVEs with CPE-based indexing'
          },
          {
            label: 'PAGERANK ANALYSIS',
            title: 'Network Authority',
            description: 'Graph centrality algorithms reveal the most impactful vulnerabilities'
          }
        ].map((item, idx) => (
          <div key={idx} style={{
            flex: 1,
            padding: '60px 40px',
            borderRight: idx < 2 ? '0.5px solid #c8c6c1' : 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '40px'
          }}>
            {/* Top: Metadata label + title */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                fontFamily: '"Monaco", "Menlo", monospace',
                fontSize: '8px',
                fontWeight: '400',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888888'
              }}>
                CAPABILITY {String(idx + 1).padStart(2, '0')}
              </div>

              <div style={{
                fontSize: '28px',
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: '700',
                lineHeight: '1.2',
                color: '#0a0a0a',
                textTransform: 'uppercase'
              }}>
                {item.title}
              </div>
            </div>

            {/* Bottom: Description */}
            <p style={{
              fontSize: '16px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              lineHeight: '1.6',
              color: '#666',
              fontWeight: '400',
              margin: '0'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER ZONE - Metadata */}
      <div style={{
        borderTop: '0.5px solid #c8c6c1',
        padding: '30px 60px',
        backgroundColor: '#f5f4f0'
      }}>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          CVE RETRIEVAL — RANKING VULNERABILITIES USING GRAPH CENTRALITY & TEXT RELEVANCE
        </div>
      </div>
    </div>
  );
}
