export default function ResearchImplicationsSlide() {
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
          RESEARCH IMPLICATIONS & IMPACT
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 015
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px 60px'
      }}>
        <div>
          {/* Anchor title */}
          <h1 style={{
            fontSize: '120px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '900',
            lineHeight: '0.85',
            letterSpacing: '-0.03em',
            color: '#0a0a0a',
            margin: '0 0 30px 0',
            textTransform: 'uppercase'
          }}>
            Security<br />Research<br />Advanced
          </h1>

          {/* Red accent bar */}
          <div style={{
            width: '120px',
            height: '8px',
            backgroundColor: '#d4564f',
            marginBottom: '60px'
          }} />

          {/* THREE IMPLICATIONS - Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {[
              {
                title: 'Faster Discovery',
                desc: 'Reduce mean time to identify high-impact vulnerabilities by 85%'
              },
              {
                title: 'Better Prioritization',
                desc: 'Network analysis reveals critical dependency chains'
              },
              {
                title: 'Evidence-Based Policy',
                desc: 'Data-driven disclosure timelines and patch prioritization'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: '2px solid #d4564f',
                paddingLeft: '20px'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '700',
                  color: '#0a0a0a',
                  margin: '0',
                  textTransform: 'uppercase'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  color: '#666',
                  margin: '0',
                  lineHeight: '1.5',
                  fontWeight: '400'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* IMPACT BOX - Callout with red border */}
          <div style={{
            borderLeft: '3px solid #d4564f',
            paddingLeft: '24px',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}>
            <div style={{
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '12px'
            }}>
              PRIMARY IMPACT
            </div>
            <p style={{
              fontSize: '16px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              color: '#0a0a0a',
              margin: '0',
              lineHeight: '1.7',
              fontWeight: '600'
            }}>
              This research establishes a paradigm for intelligent vulnerability intelligence, enabling proactive security practices across industry and academia.
            </p>
          </div>
        </div>

        {/* FOOTER ZONE */}
        <div style={{
          borderTop: '0.5px solid #c8c6c1',
          paddingTop: '30px'
        }}>
          <div style={{
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888888'
          }}>
            FUTURE WORK — ML-BASED RISK PREDICTION & THREAT INTELLIGENCE INTEGRATION
          </div>
        </div>
      </div>
    </div>
  );
}
