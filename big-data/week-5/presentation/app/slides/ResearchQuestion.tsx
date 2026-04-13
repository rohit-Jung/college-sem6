export default function ResearchQuestionSlide() {
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
          RESEARCH QUESTION
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 003
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px 60px'
      }}>
        {/* ANCHOR ZONE - Level 1: Display headline */}
        <div style={{ viewTransitionName: 'heading-content' }}>
          <h1 style={{
            fontSize: '80px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '900',
            lineHeight: '0.85',
            letterSpacing: '-0.03em',
            color: '#0a0a0a',
            margin: '0 0 30px 0',
            textTransform: 'uppercase'
          }}>
            How can<br />
            intelligent<br />
            search improve<br />
            CVE discovery?
          </h1>

          {/* Red accent bar - surgical mark */}
          <div style={{
            width: '120px',
            height: '8px',
            backgroundColor: '#d4564f',
            marginBottom: '60px'
          }} />

          {/* BODY ZONE - Main question paragraph (Level 3) */}
          <p style={{
            fontSize: '16px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: '400',
            lineHeight: '1.6',
            color: '#0a0a0a',
            margin: '0 0 60px 0',
            letterSpacing: '0',
            maxWidth: '700px'
          }}>
            By combining PageRank, BM25, and CVSS scoring, can we deliver faster, more accurate vulnerability prioritization to security teams?
          </p>

          {/* THREE SUB-QUESTIONS - Grid layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {[
              {
                num: '01',
                label: 'ALGORITHM FUSION',
                question: 'What combination of ranking methods yields optimal CVE prioritization?'
              },
              {
                num: '02',
                label: 'NETWORK ADVANTAGE',
                question: 'Does PageRank outperform text-only similarity for vulnerability discovery?'
              },
              {
                num: '03',
                label: 'TIME REDUCTION',
                question: 'How much faster can teams assess vulnerability exposure?'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                borderLeft: '2px solid #d4564f',
                paddingLeft: '16px'
              }}>
                {/* Monospace number in ALL CAPS */}
                <div style={{
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '9px',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888'
                }}>
                  SUB-Q {item.num}
                </div>

                {/* Question label */}
                <div style={{
                  fontSize: '15px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '700',
                  color: '#0a0a0a',
                  lineHeight: '1.3'
                }}>
                  {item.label}
                </div>

                {/* Body text */}
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#666',
                  lineHeight: '1.5',
                  margin: '0'
                }}>
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* METADATA ZONE - Footer */}
        <div style={{
          borderTop: '0.5px solid #c8c6c1',
          paddingTop: '30px'
        }}>
          <div style={{
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#888888'
          }}>
            RESEARCH FOUNDATION — SYSTEMATIC INVESTIGATION FRAMEWORK
          </div>
        </div>
      </div>
    </div>
  );
}
