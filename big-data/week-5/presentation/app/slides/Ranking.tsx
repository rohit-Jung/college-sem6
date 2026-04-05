export default function RankingSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 style={{
          fontSize: 'clamp(100px, 18vw, 200px)',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '900',
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
          color: '#0a0a0a',
          marginBottom: '2rem',
          margin: 0
        }}>
          RANKING &
        </h1>
        <h1 style={{
          fontSize: 'clamp(100px, 18vw, 200px)',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '900',
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
          color: '#e63329',
          marginBottom: '3rem',
          margin: 0
        }}>
          RELEVANCE
        </h1>

        {/* Algorithm Flow */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: '1rem', marginTop: '3rem', alignItems: 'start' }}>
          <div style={{ border: '1px solid #0a0a0a', padding: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.75rem'
            }}>
              STEP 1
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '14px' }}>Severity Filter</p>
            <p style={{ fontSize: '12px', color: '#888888', marginTop: '0.5rem' }}>CRITICAL → HIGH → MEDIUM</p>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>→</span>
          </div>

          <div style={{ border: '1px solid #0a0a0a', padding: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.75rem'
            }}>
              STEP 2
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '14px' }}>PageRank Score</p>
            <p style={{ fontSize: '12px', color: '#888888', marginTop: '0.5rem' }}>Network centrality</p>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>→</span>
          </div>

          <div style={{ border: '1px solid #0a0a0a', padding: '1.5rem', gridColumn: 'span 2' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.75rem'
            }}>
              STEP 3
            </p>
            <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '14px' }}>Publication Date</p>
            <p style={{ fontSize: '12px', color: '#888888', marginTop: '0.5rem' }}>Newest first as tiebreaker</p>
          </div>
        </div>

        {/* Impact Statement */}
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #0a0a0a' }}>
          <p style={{
            fontFamily: 'monospace',
            fontSize: '9px',
            fontWeight: '400',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '0.75rem'
          }}>
            RESULT
          </p>
          <p style={{ color: '#0a0a0a', lineHeight: '1.6' }}>
            Researchers identify high-impact vulnerabilities in seconds, not hours. Network analysis reveals interdependencies missed by traditional search.
          </p>
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
          [5] Intelligent Retrieval Systems for Vulnerability Intelligence
        </div>
      </div>
    </div>
  );
}

