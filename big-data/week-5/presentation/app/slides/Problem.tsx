export default function ProblemSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 style={{
          fontSize: '32px',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '700',
          color: '#0a0a0a',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em'
        }}>
          VIBE-CODED
        </h2>
        <h1 style={{
          fontSize: 'clamp(120px, 20vw, 240px)',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '900',
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
          color: '#0a0a0a',
          marginBottom: '3rem',
          margin: 0
        }}>
          VULNERABILITIES
        </h1>

        {/* Red Accent Bar */}
        <div style={{ width: '75%', marginBottom: '3rem', marginTop: '3rem' }}>
          <div style={{
            height: '4px',
            backgroundColor: '#e63329',
            width: '100%'
          }} />
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
          <div>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.5rem'
            }}>
              CURRENT STATE
            </p>
            <p style={{ color: '#0a0a0a', lineHeight: '1.6' }}>
              Modern software velocity creates exponential CVE surface area
            </p>
          </div>
          <div>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.5rem'
            }}>
              THE PROBLEM
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 'bold', fontSize: '28px', lineHeight: 1 }}>
              342,000+
            </p>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginTop: '0.25rem'
            }}>
              CVEs unindexed by library
            </p>
          </div>
        </div>
      </div>

      {/* Metadata Footer */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingTop: '16px',
        borderTop: '1px solid #e8e6e1'
      }}>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '9px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          [1] NVD Statistics — NIST (2024)
        </div>
      </div>
    </div>
  );
}

