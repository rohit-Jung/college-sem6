export default function SolutionSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 style={{
          fontSize: 'clamp(80px, 18vw, 200px)',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '900',
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
          color: '#0a0a0a',
          marginBottom: '3rem',
          margin: 0
        }}>
          INTELLIGENT CVE SEARCH
        </h1>

        {/* Red Accent Bar */}
        <div style={{ width: '66%', marginBottom: '2rem', marginTop: '2rem' }}>
          <div style={{
            height: '4px',
            backgroundColor: '#e63329',
            width: '100%'
          }} />
        </div>

        {/* Three Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginTop: '4rem' }}>
          <div>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '1rem'
            }}>
              CAPABILITY 01
            </p>
            <p style={{ color: '#0a0a0a', lineHeight: '1.6', fontWeight: 600, fontSize: '16px' }}>
              Severity-Ranked Search
            </p>
            <p style={{ fontSize: '12px', color: '#888888', marginTop: '0.5rem' }}>
              Find vulnerabilities by CVSS scores
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
              marginBottom: '1rem'
            }}>
              CAPABILITY 02
            </p>
            <p style={{ color: '#0a0a0a', lineHeight: '1.6', fontWeight: 600, fontSize: '16px' }}>
              Library Matching
            </p>
            <p style={{ fontSize: '12px', color: '#888888', marginTop: '0.5rem' }}>
              Precise CPE-based indexing
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
              marginBottom: '1rem'
            }}>
              CAPABILITY 03
            </p>
            <p style={{ color: '#0a0a0a', lineHeight: '1.6', fontWeight: 600, fontSize: '16px' }}>
              PageRank Analysis
            </p>
            <p style={{ fontSize: '12px', color: '#888888', marginTop: '0.5rem' }}>
              Network-aware vulnerability ranking
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
          [2] CVE Retrieval — Ranking Vulnerabilities Using Graph Centrality
        </div>
      </div>
    </div>
  );
}

