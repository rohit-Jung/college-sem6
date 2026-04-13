export default function ConclusionSlide() {
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
          CONCLUSION & SUMMARY
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 012
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
        {/* ANCHOR ZONE - Display headline */}
        <div style={{ viewTransitionName: 'heading-content' }}>
          {/* Red accent bar */}
          <div style={{
            width: '120px',
            height: '8px',
            backgroundColor: '#d4564f',
            marginBottom: '40px'
          }} />

          <h1 style={{
            fontSize: '160px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '900',
            lineHeight: '0.85',
            letterSpacing: '-0.03em',
            color: '#0a0a0a',
            margin: '0 0 30px 0',
            textTransform: 'uppercase'
          }}>
            Faster<br />Discovery
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '18px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            lineHeight: '1.7',
            color: '#666',
            margin: '30px 0 60px 0',
            maxWidth: '750px',
            fontWeight: '400'
          }}>
            Empower security researchers, developers, and organizations with intelligent, structured vulnerability intelligence systems.
          </p>

          {/* THREE NEXT STEPS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px'
          }}>
            {[
              { num: '01', title: 'Expand CVE Sources', desc: 'Integrate additional vulnerability databases' },
              { num: '02', title: 'Real-time Updates', desc: 'Live feeds from multiple disclosure channels' },
              { num: '03', title: 'ML Analysis', desc: 'Predictive severity and impact modeling' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: '2px solid #d4564f',
                paddingLeft: '20px'
              }}>
                <div style={{
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888'
                }}>
                  STEP {item.num}
                </div>

                <div style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '700',
                  color: '#0a0a0a'
                }}>
                  {item.title}
                </div>

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
            END OF PRESENTATION — FUTURE DIRECTIONS FOR VULNERABILITY RESEARCH
          </div>
        </div>
      </div>
    </div>
  );
}
