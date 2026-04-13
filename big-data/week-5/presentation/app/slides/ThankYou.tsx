export default function ThankYouSlide() {
  return (
    <div className="w-full h-full" style={{
      backgroundColor: '#f5f4f0',
      color: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0',
      margin: '0'
    }}>
      {/* TOP ACCENT BAR - Red surgical mark */}
      <div style={{
        width: '100%',
        height: '60px',
        backgroundColor: '#d4564f'
      }} />

      {/* MAIN ZONE - Display headline centered */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 60px'
      }}>
        {/* ANCHOR: Display headline - massive */}
        <h1 style={{
          fontSize: '220px',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: '900',
          lineHeight: '0.85',
          letterSpacing: '-0.03em',
          margin: '0 0 40px 0',
          textTransform: 'uppercase',
          color: '#0a0a0a'
        }}>
          Any<br />
          Questions?
        </h1>

        {/* Red accent bar */}
        <div style={{
          width: '180px',
          height: '12px',
          backgroundColor: '#d4564f'
        }} />
      </div>

      {/* FOOTER ZONE - Contact info */}
      <div style={{
        borderTop: '0.5px solid #c8c6c1',
        padding: '40px 60px',
        backgroundColor: '#f5f4f0'
      }}>
        {/* Author */}
        <div style={{
          fontSize: '9px',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: '700',
          color: '#0a0a0a',
          marginBottom: '12px',
          textTransform: 'uppercase'
        }}>
          Rohit Jung Kathet
        </div>

        {/* Module info in monospace */}
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '9px',
          fontWeight: '400',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#888888',
          marginBottom: '16px'
        }}>
          BIG DATA • MODULE 06 • SEMESTER 6
        </div>

        {/* Tutors */}
        <div style={{
          borderTop: '0.5px solid #c8c6c1',
          paddingTop: '16px',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          color: '#666'
        }}>
          Tutor: Sushil Timalsina • Leader: Chrianjivi Khanal
        </div>
      </div>
    </div>
  );
}
