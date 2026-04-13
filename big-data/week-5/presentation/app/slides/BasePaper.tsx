export default function BasePaperSlide() {
  return (
    <div className="w-full h-full" style={{
      backgroundColor: '#f5f4f0',
      color: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0'
    }}>
      {/* METADATA ZONE - Top with hairline rule */}
      <div style={{ viewTransitionName: 'heading-content',
        borderBottom: '0.5px solid #c8c6c1',
        padding: '40px 60px 30px 60px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div style={{ viewTransitionName: 'heading-content',
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          BASE PAPER & COMPARISON
        </div>
        <div style={{ viewTransitionName: 'heading-content',
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 004
        </div>
      </div>

      {/* MAIN CONTENT - Two-column grid */}
      <div style={{ viewTransitionName: 'heading-content',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px 60px',
        gap: '40px'
      }}>
        {/* Two-column comparison */}
        <div style={{ viewTransitionName: 'heading-content',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px'
        }}>
          {/* LEFT: Base Paper */}
          <div style={{ viewTransitionName: 'heading-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Level 2: Column Title */}
            <div style={{ viewTransitionName: 'heading-content',
              fontSize: '24px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '900',
              color: '#0a0a0a',
              textTransform: 'uppercase',
              lineHeight: '1.2',
              borderBottom: '2px solid #c8c6c1',
              paddingBottom: '16px'
            }}>
              Base Paper
            </div>

            {/* Content: Paper details in tabular format */}
            <div style={{ viewTransitionName: 'heading-content',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Title */}
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  PUBLICATION TITLE
                </div>
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: '#0a0a0a',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  PageRank for Vulnerability Networks: Graph-Based Ranking in Security Domains
                </p>
              </div>

              {/* Authors & Year */}
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  AUTHORS & VENUE
                </div>
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Published 2022<br />
                  IEEE Symposium on Security & Privacy
                </p>
              </div>

              {/* Dataset */}
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  DATASET
                </div>
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  NVD 2019 (180K CVEs)<br />
                  + Dependency graphs
                </p>
              </div>

              {/* Approach */}
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  PRIMARY METHOD
                </div>
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  PageRank on CVE dependency networks
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: This Research (Improvements) */}
          <div style={{ viewTransitionName: 'heading-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderLeft: '2px solid #d4564f',
            paddingLeft: '40px'
          }}>
            {/* Level 2: Column Title with accent */}
            <div style={{ viewTransitionName: 'heading-content',
              fontSize: '24px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '900',
              color: '#d4564f',
              textTransform: 'uppercase',
              lineHeight: '1.2'
            }}>
              This Research
            </div>

            {/* Improvements list with monospace markers */}
            <div style={{ viewTransitionName: 'heading-content',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {[
                { label: 'DATASET SCALE', desc: '342K+ CVEs vs 180K (1.9× larger)' },
                { label: 'ALGORITHM FUSION', desc: 'PageRank + BM25 + CVSS combined' },
                { label: 'RANKING HYBRID', desc: 'Text relevance + network authority' },
                { label: 'SEVERITY LAYER', desc: 'CVSS scoring for real prioritization' },
                { label: 'PROOF OF CONCEPT', desc: 'Live interactive search system' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ viewTransitionName: 'heading-content',
                    fontFamily: '"Monaco", "Menlo", monospace',
                    fontSize: '9px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    color: '#d4564f',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    →
                  </div>
                  <div style={{ viewTransitionName: 'heading-content',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <div style={{ viewTransitionName: 'heading-content',
                      fontFamily: '"Monaco", "Menlo", monospace',
                      fontSize: '8px',
                      fontWeight: '400',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888888'
                    }}>
                      {item.label}
                    </div>
                    <p style={{
                      fontSize: '15px',
                      fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      fontWeight: '400',
                      color: '#0a0a0a',
                      margin: '0',
                      lineHeight: '1.4'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* METADATA ZONE - Footer */}
        <div style={{ viewTransitionName: 'heading-content',
          borderTop: '0.5px solid #c8c6c1',
          paddingTop: '30px'
        }}>
          <div style={{ viewTransitionName: 'heading-content',
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888888'
          }}>
            LITERATURE CONTEXT — SYSTEMATIC ADVANCEMENT OVER PRIOR RESEARCH
          </div>
        </div>
      </div>
    </div>
  );
}
