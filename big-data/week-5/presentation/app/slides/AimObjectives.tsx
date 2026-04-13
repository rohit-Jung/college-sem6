export default function AimObjectivesSlide() {
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
          AIM & OBJECTIVES
        </div>
        <div style={{ viewTransitionName: 'heading-content',
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 006
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ viewTransitionName: 'heading-content',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px 60px'
      }}>
        {/* AIM SECTION */}
        <div style={{ viewTransitionName: 'heading-content',
          marginBottom: '60px'
        }}>
          {/* Level 2: Section title */}
          <div style={{ viewTransitionName: 'heading-content',
            fontSize: '18px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '700',
            color: '#d4564f',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            Primary Aim
          </div>

          {/* Aim statement in Level 3 body text */}
          <p style={{
            fontSize: '18px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '600',
            lineHeight: '1.7',
            color: '#0a0a0a',
            margin: '0 0 40px 0',
            maxWidth: '800px'
          }}>
            Develop an intelligent CVE search engine that ranks vulnerabilities by relevance and severity using graph-based and probabilistic ranking algorithms.
          </p>

          {/* Red accent bar */}
          <div style={{ viewTransitionName: 'heading-content',
            width: '100px',
            height: '6px',
            backgroundColor: '#d4564f',
            marginBottom: '60px'
          }} />

          {/* OBJECTIVES SECTION */}
          <div>
            <div style={{ viewTransitionName: 'heading-content',
              fontSize: '18px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '700',
              color: '#0a0a0a',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '30px'
            }}>
              Seven Supporting Objectives
            </div>

            {/* 7 Objectives in grid (2 columns, then wrapping) */}
            <div style={{ viewTransitionName: 'heading-content',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px'
            }}>
              {[
                { num: '01', obj: 'Collect and preprocess CVE data from NVD 2.0' },
                { num: '02', obj: 'Implement inverted index for O(1) retrieval' },
                { num: '03', obj: 'Design PageRank algorithm for network analysis' },
                { num: '04', obj: 'Implement BM25 probabilistic ranking' },
                { num: '05', obj: 'Integrate CVSS severity with ranking metrics' },
                { num: '06', obj: 'Evaluate system performance on test queries' },
                { num: '07', obj: 'Compare results with baseline search methods' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  paddingLeft: '16px',
                  borderLeft: idx % 2 === 0 ? '2px solid #d4564f' : '2px solid #0a0a0a'
                }}>
                  {/* Monospace number marker */}
                  <div style={{ viewTransitionName: 'heading-content',
                    fontFamily: '"Monaco", "Menlo", monospace',
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    color: idx % 2 === 0 ? '#d4564f' : '#0a0a0a',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    {item.num}
                  </div>

                  {/* Objective text */}
                  <p style={{
                    fontSize: '15px',
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: '500',
                    lineHeight: '1.5',
                    color: '#0a0a0a',
                    margin: '0'
                  }}>
                    {item.obj}
                  </p>
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
            RESEARCH STRATEGY — METHODICAL DECOMPOSITION OF RESEARCH GOALS
          </div>
        </div>
      </div>
    </div>
  );
}
