export default function ImplementationDetailsSlide() {
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
          KEY METRICS & PERFORMANCE
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 014
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
            Performance<br />& Accuracy
          </h1>

          {/* Red accent bar */}
          <div style={{
            width: '120px',
            height: '8px',
            backgroundColor: '#d4564f',
            marginBottom: '60px'
          }} />

          {/* Metrics grid - 2 columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px'
          }}>
            {[
              { metric: 'SEARCH LATENCY', value: '<500ms', desc: 'Sub-half-second response' },
              { metric: 'DATASET COVERAGE', value: '342K+', desc: 'CVEs indexed & ranked' },
              { metric: 'ACCURACY RATE', value: '94.7%', desc: 'Relevance precision' },
              { metric: 'SYSTEM UPTIME', value: '99.9%', desc: 'Enterprise SLA' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: idx % 2 === 0 ? '2px solid #d4564f' : '2px solid #0a0a0a',
                paddingLeft: '24px'
              }}>
                {/* Metric label */}
                <div style={{
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888'
                }}>
                  {item.metric}
                </div>

                {/* Value - large display */}
                <div style={{
                  fontSize: '56px',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontWeight: '700',
                  color: idx % 2 === 0 ? '#d4564f' : '#0a0a0a',
                  lineHeight: '0.9'
                }}>
                  {item.value}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#666',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
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
            PRODUCTION READY — ENTERPRISE-GRADE SECURITY & RELIABILITY
          </div>
        </div>
      </div>
    </div>
  );
}
