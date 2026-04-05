export default function ArchitectureSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 style={{
          fontSize: '32px',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '700',
          color: '#0a0a0a',
          marginBottom: '2rem',
          letterSpacing: '-0.02em'
        }}>
          SYSTEM ARCHITECTURE
        </h2>

        {/* Architecture Diagram - ASCII/Swiss Style */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #0a0a0a',
          padding: '2rem',
          fontFamily: 'monospace',
          fontSize: '12px',
          marginTop: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ border: '1px solid #0a0a0a', padding: '1rem', display: 'inline-block', minWidth: '100px' }}>
                <p style={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>NVD API</p>
              </div>
            </div>
            <div style={{ flex: 1, borderTop: '1px solid #0a0a0a', height: 0, position: 'relative', margin: '0 1rem' }}>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%) translateX(8px)' }}>▶</span>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ border: '1px solid #0a0a0a', padding: '1rem', display: 'inline-block', minWidth: '100px' }}>
                <p style={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>CPE PARSE</p>
              </div>
            </div>
            <div style={{ flex: 1, borderTop: '1px solid #0a0a0a', height: 0, position: 'relative', margin: '0 1rem' }}>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%) translateX(8px)' }}>▶</span>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ border: '1px solid #0a0a0a', padding: '1rem', display: 'inline-block', minWidth: '100px' }}>
                <p style={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>INDEX</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>↓</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ border: '1px solid #0a0a0a', padding: '1rem', display: 'inline-block', minWidth: '120px' }}>
                <p style={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>RANK ENGINE</p>
                <p style={{ fontSize: '11px', color: '#888888', margin: '0.25rem 0 0 0' }}>CVSS + PageRank</p>
              </div>
            </div>
            <div style={{ flex: 1, borderTop: '1px solid #0a0a0a', height: 0, position: 'relative', margin: '0 1rem' }}>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%) translateX(8px)' }}>▶</span>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ border: '2px solid #e63329', backgroundColor: '#fffbfb', padding: '1rem', display: 'inline-block', minWidth: '120px' }}>
                <p style={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', color: '#e63329', margin: 0 }}>RESULTS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
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
              DATA SOURCE
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600 }}>NVD 2.0 API</p>
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
              FILTERING
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600 }}>Library + Severity</p>
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
              RANKING
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600 }}>Severity → Score → Date</p>
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
          [3] CVSS v3.1 Specification — FIRST.org (2022)
        </div>
      </div>
    </div>
  );
}

