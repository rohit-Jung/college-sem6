export default function IntroSlide() {
  return (
    <div className="w-full h-full" style={{
      backgroundColor: '#f5f4f0',
      color: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* GEOMETRIC BACKGROUND - Swiss minimal shapes */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        {/* Large red rectangle - top right */}
        <rect x="60%" y="0" width="40%" height="30%" fill="#d4564f" opacity="0.12" />
        
        {/* Circle - center right */}
        <circle cx="75%" cy="50%" r="15%" fill="none" stroke="#d4564f" strokeWidth="1" opacity="0.08" />
        
        {/* Diagonal line accent */}
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#0a0a0a" strokeWidth="1" opacity="0.04" />
        
        {/* Grid pattern - faint */}
        <g stroke="#c8c6c1" strokeWidth="0.5" opacity="0.15">
          <line x1="50%" y1="0" x2="50%" y2="100%" />
          <line x1="0" y1="50%" x2="100%" y2="50%" />
        </g>
      </svg>

      {/* Content wrapper - relative positioning for z-index */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* METADATA ZONE - Top with hairline rule */}
        <div style={{
          borderBottom: '0.5px solid #c8c6c1',
          padding: '40px 60px 30px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '80px'
        }}>
          {/* Left: Monospace label zone */}
          <div style={{
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
            lineHeight: '1.6'
          }}>
            CVE-RESEARCH<br />
            WEEK 05<br />
            BIG DATA<br />
            2026
          </div>

          {/* Right: Monospace metadata grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px 60px',
            marginLeft: 'auto'
          }}>
            <div style={{
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: '8px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888'
            }}>
              MODULE
            </div>
            <div style={{
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: '8px',
              fontWeight: '400',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888'
            }}>
              TUTORS
            </div>
          </div>
        </div>

        {/* MAIN CONTENT ZONE - Anchor + Body */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 60px'
        }}>
          {/* ANCHOR ZONE - Larger display type (Level 1) */}
          <div style={{ viewTransitionName: 'heading-content' }}>
            <div style={{
              fontSize: '150px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.80',
              letterSpacing: '-0.03em',
              color: '#0a0a0a',
              margin: '0 0 0 0',
              textTransform: 'uppercase'
            }}>
              ROHIT<br />JUNG
            </div>

            {/* Red accent bar - surgical mark */}
            <div style={{
              width: '200px',
              height: '14px',
              backgroundColor: '#d4564f',
              marginTop: '16px',
              marginBottom: '32px'
            }} />

            <div style={{
              fontSize: '170px',
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: '900',
              lineHeight: '0.80',
              letterSpacing: '-0.03em',
              color: '#d4564f',
              margin: '0',
              textTransform: 'uppercase'
            }}>
              KATHET
            </div>
          </div>

          {/* BODY ZONE - Information grid (Level 3) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            borderTop: '0.5px solid #c8c6c1',
            paddingTop: '40px'
          }}>
            {/* Left column */}
            <div>
              <div style={{
                fontSize: '15px',
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: '700',
                letterSpacing: '0',
                color: '#0a0a0a',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                Big Data Research<br />
                Module 06
              </div>
              <div style={{
                fontSize: '16px',
                fontFamily: '"Monaco", "Menlo", monospace',
                fontWeight: '400',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#888888',
                lineHeight: '1.5'
              }}>
                SEMESTER 6<br />
                2026
              </div>
            </div>

            {/* Right column */}
            <div>
              <div style={{
                fontSize: '15px',
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: '700',
                letterSpacing: '0',
                color: '#0a0a0a',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                Tutor: Sushil Timalsina<br />
                Leader: Chrianjivi Khanal
              </div>
              <div style={{
                fontSize: '16px',
                fontFamily: '"Monaco", "Menlo", monospace',
                fontWeight: '400',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#888888',
                lineHeight: '1.5'
              }}>
                INSTRUCTORS
              </div>
            </div>
          </div>
        </div>

        {/* VOID ZONE - Bottom footer metadata */}
        <div style={{
          borderTop: '0.5px solid #c8c6c1',
          padding: '30px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888'
          }}>
            SLIDE 001
          </div>
          <div style={{
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: '8px',
            fontWeight: '400',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888'
          }}>
            CVE SEARCH ENGINE • RESEARCH PROPOSAL
          </div>
        </div>
      </div>
    </div>
  );
}

