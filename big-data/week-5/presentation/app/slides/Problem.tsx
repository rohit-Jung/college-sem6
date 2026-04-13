export default function ProblemSlide() {
  return (
    <div className="w-full h-full" style={{
      backgroundColor: '#f5f4f0', // OFF WHITE - Swiss material
      color: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0'
    }}>
      {/* METADATA ZONE - Top with hairline rule */}
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
          PROBLEM STATEMENT
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 002
        </div>
      </div>

      {/* MAIN CONTENT - Flex layout */}
      <div style={{
        flex: 1,
        display: 'flex',
        padding: '80px 60px',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left: VOID ZONE with subtle geometric accent */}
        <div style={{
          flex: 1,
          position: 'relative',
          minHeight: '300px'
        }}>
          {/* Red accent bar - surgical mark */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '8px',
            height: '200px',
            backgroundColor: '#d4564f'
          }} />
          
          {/* Hairline grid annotation */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* Vertical grid lines at 25% opacity */}
            <line x1="0" y1="0" x2="0" y2="100%" stroke="#c8c6c1" strokeWidth="0.5" opacity="0.4" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#c8c6c1" strokeWidth="0.5" opacity="0.4" />
            <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#c8c6c1" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>

        {/* Right: ANCHOR ZONE - Display type + Body */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          {/* Level 1: Anchor - Display headline */}
          <div style={{ viewTransitionName: 'heading-content', marginBottom: '40px' }}>
            <div style={{
              fontSize: '180px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.85',
              letterSpacing: '-0.03em',
              color: '#0a0a0a',
              margin: '0 0 20px 0',
              textTransform: 'uppercase'
            }}>
              342K+
            </div>
            <div style={{
              fontSize: '96px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.85',
              letterSpacing: '-0.03em',
              color: '#d4564f',
              margin: '0 0 40px 0',
              textTransform: 'uppercase'
            }}>
              CVEs
            </div>
          </div>

          {/* Level 3: Body - Descriptive text */}
          <p style={{
            fontSize: '16px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '400',
            lineHeight: '1.6',
            color: '#0a0a0a',
            margin: '0 0 30px 0',
            letterSpacing: '0',
            maxWidth: '500px'
          }}>
            Modern software velocity creates exponential CVE surface area. Current ranking systems cannot keep pace with disclosure rates, leaving security teams overwhelmed.
          </p>

          {/* Level 4: Metadata - Citation */}
          <div style={{
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888888',
            paddingTop: '20px',
            borderTop: '0.5px solid #c8c6c1'
          }}>
            NVD STATISTICS — NIST (2024)
          </div>
        </div>
      </div>

      {/* FOOTER ZONE - Metadata zone with hairline rule */}
      <div style={{
        borderTop: '0.5px solid #c8c6c1',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          CVE SEARCH ENGINE RESEARCH
        </div>
      </div>
    </div>
  );
}

