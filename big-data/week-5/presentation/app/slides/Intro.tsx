export default function IntroSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Name as Display Hierarchy */}
        <div className="mb-2">
          <h1 style={{
            fontSize: 'clamp(120px, 20vw, 240px)',
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: '900',
            lineHeight: '0.9',
            letterSpacing: '-0.04em',
            color: '#0a0a0a',
            margin: '0'
          }}>
            ROHIT JUNG
          </h1>
        </div>

        <div className="mb-16">
          <h1 style={{
            fontSize: 'clamp(120px, 20vw, 240px)',
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: '900',
            lineHeight: '0.9',
            letterSpacing: '-0.04em',
            color: '#0a0a0a',
            margin: '0'
          }}>
            KATHET
          </h1>
        </div>

        {/* Red Accent Bar */}
        <div style={{ width: '60%', marginBottom: '3rem' }}>
          <div style={{
            height: '4px',
            backgroundColor: '#e63329',
            width: '100%'
          }} />
        </div>
      </div>

      {/* Metadata Footer - Monospace style */}
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
          BIG DATA | MODULE 06 | 2026
        </div>
      </div>
    </div>
  );
}

