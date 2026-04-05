export default function ConclusionSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div style={{ width: '25%', marginBottom: '3rem' }}>
          <div style={{
            height: '4px',
            backgroundColor: '#e63329',
            width: '100%',
            margin: '0 auto'
          }} />
        </div>

        <h1 style={{
          fontSize: 'clamp(80px, 18vw, 180px)',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '900',
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
          color: '#0a0a0a',
          marginBottom: '2rem',
          margin: 0
        }}>
          FASTER DISCOVERY
        </h1>

        <p style={{ color: '#0a0a0a', fontSize: '20px', maxWidth: '800px', lineHeight: '1.6', marginBottom: '3rem' }}>
          Empower security researchers, developers, and academicians with structured vulnerability intelligence
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', width: '100%', marginTop: '3rem' }}>
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
              NEXT STEP 01
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '14px' }}>Expand CVE Sources</p>
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
              NEXT STEP 02
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '14px' }}>Real-time Updates</p>
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
              NEXT STEP 03
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '14px' }}>ML-Powered Analysis</p>
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
          END OF PRESENTATION
        </div>
      </div>
    </div>
  );
}

