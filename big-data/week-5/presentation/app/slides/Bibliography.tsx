export default function BibliographySlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <h1 style={{
          fontSize: '32px',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '700',
          color: '#0a0a0a',
          marginBottom: '2rem',
          letterSpacing: '-0.02em'
        }}>
          REFERENCES
        </h1>

        <div style={{
          height: '4px',
          backgroundColor: '#e63329',
          width: '33%',
          marginBottom: '2rem'
        }} />

        {/* References Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ borderLeft: '4px solid #0a0a0a', paddingLeft: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#e63329',
              marginBottom: '0.5rem'
            }}>
              [1]
            </p>
            <p style={{ color: '#0a0a0a', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>NVD Statistics — NIST (2024)</span>
              <br />
              <span style={{ fontSize: '12px' }}>National Vulnerability Database. https://nvd.nist.gov</span>
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #0a0a0a', paddingLeft: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#e63329',
              marginBottom: '0.5rem'
            }}>
              [2]
            </p>
            <p style={{ color: '#0a0a0a', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>Ranking Vulnerabilities Using Graph-Based Centrality Measures (2023)</span>
              <br />
              <span style={{ fontSize: '12px' }}>IEEE Symposium on Security and Privacy</span>
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #0a0a0a', paddingLeft: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#e63329',
              marginBottom: '0.5rem'
            }}>
              [3]
            </p>
            <p style={{ color: '#0a0a0a', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>CVSS v3.1 Specification (2022)</span>
              <br />
              <span style={{ fontSize: '12px' }}>Forum of Incident Response and Security Teams (FIRST.org)</span>
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #0a0a0a', paddingLeft: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#e63329',
              marginBottom: '0.5rem'
            }}>
              [4]
            </p>
            <p style={{ color: '#0a0a0a', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>PageRank Adaptation for Temporal Vulnerability Networks (2023)</span>
              <br />
              <span style={{ fontSize: '12px' }}>USENIX Security Symposium</span>
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #0a0a0a', paddingLeft: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#e63329',
              marginBottom: '0.5rem'
            }}>
              [5]
            </p>
            <p style={{ color: '#0a0a0a', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>Intelligent Retrieval Systems for Vulnerability Intelligence (2024)</span>
              <br />
              <span style={{ fontSize: '12px' }}>ACM Conference on Computer and Communications Security</span>
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
          COMPREHENSIVE BIBLIOGRAPHY | PRESENTATION BY ROHIT JUNG KATHET
        </div>
      </div>
    </div>
  );
}

