export default function TechnicalComponentsSlide() {
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
          TECHNICAL COMPONENTS
        </div>
        <div style={{ viewTransitionName: 'heading-content',
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 009
        </div>
      </div>

      {/* MAIN CONTENT - Six-component grid */}
      <div style={{ viewTransitionName: 'heading-content',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px 60px',
        overflowY: 'auto'
      }}>
        {/* Three-column grid */}
        <div style={{ viewTransitionName: 'heading-content',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {[
            {
              num: '01',
              title: 'Tokenization',
              desc: 'Split vulnerability text into individual terms',
              example: '"buffer overflow" → ["buffer", "overflow"]'
            },
            {
              num: '02',
              title: 'Stemming',
              desc: 'Normalize terms to root form for matching',
              example: '"vulnerabilities" → "vulner"'
            },
            {
              num: '03',
              title: 'Inverted Index',
              desc: 'Map terms to CVE documents O(1) lookup',
              example: 'buffer → [CVE-2024-001, CVE-2024-042]'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderLeft: '2px solid #d4564f',
              paddingLeft: '20px'
            }}>
              {/* Monospace number + title */}
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  COMPONENT {item.num}
                </div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '700',
                  color: '#0a0a0a'
                }}>
                  {item.title}
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: '400',
                color: '#666',
                margin: '0',
                lineHeight: '1.5'
              }}>
                {item.desc}
              </p>

              {/* Example in monospace */}
              <div style={{ viewTransitionName: 'heading-content',
                backgroundColor: '#ffffff',
                border: '0.5px solid #c8c6c1',
                padding: '12px',
                fontFamily: '"Monaco", "Menlo", monospace',
                fontSize: '16px',
                color: '#888888',
                lineHeight: '1.4'
              }}>
                {item.example}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ viewTransitionName: 'heading-content',
          borderTop: '0.5px solid #c8c6c1',
          margin: '20px 0'
        }} />

        {/* Second row: 3 more components */}
        <div style={{ viewTransitionName: 'heading-content',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px'
        }}>
          {[
            {
              num: '04',
              title: 'BM25 Ranking',
              desc: 'Probabilistic ranking of document relevance',
              example: 'Score = IDF × TF normalization'
            },
            {
              num: '05',
              title: 'PageRank Graph',
              desc: 'Analyze CVE dependency network centrality',
              example: 'Rank = f(incoming edges, damping)'
            },
            {
              num: '06',
              title: 'CVSS Severity',
              desc: 'Integrate vulnerability impact scoring',
              example: 'Final = BM25 + PageRank + CVSS'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderLeft: '2px solid #0a0a0a',
              paddingLeft: '20px'
            }}>
              {/* Monospace number + title */}
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  COMPONENT {item.num}
                </div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '700',
                  color: '#0a0a0a'
                }}>
                  {item.title}
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: '400',
                color: '#666',
                margin: '0',
                lineHeight: '1.5'
              }}>
                {item.desc}
              </p>

              {/* Example in monospace */}
              <div style={{ viewTransitionName: 'heading-content',
                backgroundColor: '#ffffff',
                border: '0.5px solid #c8c6c1',
                padding: '12px',
                fontFamily: '"Monaco", "Menlo", monospace',
                fontSize: '16px',
                color: '#888888',
                lineHeight: '1.4'
              }}>
                {item.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ZONE - Metadata */}
      <div style={{ viewTransitionName: 'heading-content',
        borderTop: '0.5px solid #c8c6c1',
        padding: '30px 60px'
      }}>
        <div style={{ viewTransitionName: 'heading-content',
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          IMPLEMENTATION — SIX-LAYER PROCESSING PIPELINE FOR INTELLIGENT RANKING
        </div>
      </div>
    </div>
  );
}
