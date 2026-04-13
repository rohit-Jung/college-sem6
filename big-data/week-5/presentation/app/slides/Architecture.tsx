export default function ArchitectureSlide() {
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
          SYSTEM ARCHITECTURE
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 008
        </div>
      </div>

      {/* MAIN CONTENT - Data flow diagram */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 60px'
      }}>
        {/* PROCESSING PIPELINE - Horizontal flow */}
        <div style={{
          width: '100%',
          maxWidth: '1000px'
        }}>
          {/* Stage 1: Input */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '60px',
            gap: '40px'
          }}>
            {['INPUT', 'PARSE', 'INDEX'].map((label, idx) => (
              <div key={idx} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}>
                {/* Monospace label */}
                <div style={{
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888'
                }}>
                  STAGE {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Box with title */}
                <div style={{
                  border: '0.5px solid #0a0a0a',
                  padding: '24px 32px',
                  textAlign: 'center',
                  minWidth: '120px'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#0a0a0a'
                  }}>
                    {label}
                  </div>
                  {idx === 0 && (
                    <div style={{
                      fontSize: '16px',
                      fontFamily: '"Monaco", "Menlo", monospace',
                      color: '#888888',
                      marginTop: '8px'
                    }}>
                      NVD 2.0
                    </div>
                  )}
                  {idx === 1 && (
                    <div style={{
                      fontSize: '16px',
                      fontFamily: '"Monaco", "Menlo", monospace',
                      color: '#888888',
                      marginTop: '8px'
                    }}>
                      CPE+CVSS
                    </div>
                  )}
                  {idx === 2 && (
                    <div style={{
                      fontSize: '16px',
                      fontFamily: '"Monaco", "Menlo", monospace',
                      color: '#888888',
                      marginTop: '8px'
                    }}>
                      Inverted
                    </div>
                  )}
                </div>

                {/* Connecting arrow */}
                {idx < 2 && (
                  <div style={{
                    fontSize: '18px',
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    color: '#0a0a0a',
                    marginTop: '8px'
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Vertical divider */}
          <div style={{
            height: '40px',
            borderLeft: '0.5px solid #c8c6c1',
            margin: '0 auto',
            width: '0'
          }} />

          {/* Stage 2: Ranking & Results */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '60px',
            gap: '40px'
          }}>
            {[
              { label: 'RANK ENGINE', sublabel: 'PageRank\nBM25\nCVSS' },
              { label: 'RESULTS', sublabel: 'Sorted\nRanked\nFiltered' }
            ].map((item, idx) => (
              <div key={idx} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}>
                {/* Monospace label */}
                <div style={{
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888'
                }}>
                  STAGE {String(idx + 4).padStart(2, '0')}
                </div>

                {/* Box - results in red accent */}
                <div style={{
                  border: idx === 0 ? '0.5px solid #0a0a0a' : '2px solid #d4564f',
                  padding: '24px 32px',
                  textAlign: 'center',
                  minWidth: '140px',
                  backgroundColor: idx === 0 ? 'transparent' : '#ffe8e6'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: idx === 0 ? '#0a0a0a' : '#d4564f'
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontFamily: '"Monaco", "Menlo", monospace',
                    color: idx === 0 ? '#888888' : '#d4564f',
                    marginTop: '8px',
                    lineHeight: '1.5'
                  }}>
                    {item.sublabel.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Connecting arrow */}
                {idx < 1 && (
                  <div style={{
                    fontSize: '18px',
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    color: '#0a0a0a',
                    marginTop: '8px'
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER ZONE - Metadata */}
      <div style={{
        borderTop: '0.5px solid #c8c6c1',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SYSTEM PIPELINE — DATA FLOW FROM INGESTION TO RANKED RESULTS
        </div>
      </div>
    </div>
  );
}
