export default function BibliographySlide() {
  const references = [
    {
      num: '[1]',
      title: 'NVD Statistics — NIST (2024)',
      org: 'National Vulnerability Database',
      url: 'https://nvd.nist.gov'
    },
    {
      num: '[2]',
      title: 'Ranking Vulnerabilities Using Graph-Based Centrality (2023)',
      org: 'IEEE Symposium on Security and Privacy',
      url: ''
    },
    {
      num: '[3]',
      title: 'CVSS v3.1 Specification (2022)',
      org: 'Forum of Incident Response and Security Teams',
      url: 'https://first.org'
    },
    {
      num: '[4]',
      title: 'PageRank Adaptation for Temporal Networks (2023)',
      org: 'USENIX Security Symposium',
      url: ''
    },
    {
      num: '[5]',
      title: 'Intelligent Retrieval for Vulnerability Intelligence (2024)',
      org: 'ACM CCS — Computer and Communications Security',
      url: ''
    }
  ];

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
          BIBLIOGRAPHY & REFERENCES
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 013
        </div>
      </div>

      {/* MAIN CONTENT - References list */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 60px',
        overflowY: 'auto'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '80px',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: '900',
          color: '#0a0a0a',
          margin: '0 0 30px 0',
          textTransform: 'uppercase',
          lineHeight: '0.9'
        }}>
          References
        </h1>

        {/* Red accent bar */}
        <div style={{
          width: '100px',
          height: '8px',
          backgroundColor: '#d4564f',
          marginBottom: '60px'
        }} />

        {/* References in tabular format with monospace numbers */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {references.map((ref, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: '24px',
              alignItems: 'start',
              borderBottom: idx < references.length - 1 ? '0.5px solid #c8c6c1' : 'none',
              paddingBottom: '20px'
            }}>
              {/* Monospace reference number */}
              <div style={{
                fontFamily: '"Monaco", "Menlo", monospace',
                fontSize: '15px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                color: '#d4564f',
                flexShrink: 0
              }}>
                {ref.num}
              </div>

              {/* Reference details */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: '#0a0a0a',
                  lineHeight: '1.4'
                }}>
                  {ref.title}
                </div>

                <div style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#888888'
                }}>
                  {ref.org}
                </div>

                {ref.url && (
                  <div style={{
                    fontSize: '15px',
                    fontFamily: '"Monaco", "Menlo", monospace',
                    fontWeight: '400',
                    color: '#d4564f',
                    wordBreak: 'break-all'
                  }}>
                    {ref.url}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ZONE */}
      <div style={{
        borderTop: '0.5px solid #c8c6c1',
        padding: '30px 60px'
      }}>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          ACADEMIC SOURCES — PEER-REVIEWED PUBLICATIONS & AUTHORITATIVE DATABASES
        </div>
      </div>
    </div>
  );
}
