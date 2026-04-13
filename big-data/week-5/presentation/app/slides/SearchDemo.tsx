'use client';

import SearchDemo from '@/app/components/SearchDemo';

export default function SearchDemoSlide() {
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
          INTERACTIVE DEMONSTRATION
        </div>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 010
        </div>
      </div>

      {/* ANCHOR ZONE - Display headline */}
      <div style={{
        borderBottom: '0.5px solid #c8c6c1',
        padding: '40px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        viewTransitionName: 'heading-content'
      }}>
        <h1 style={{
          fontSize: '80px',
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: '900',
          lineHeight: '0.85',
          letterSpacing: '-0.03em',
          color: '#0a0a0a',
          margin: '0 0 20px 0',
          textTransform: 'uppercase'
        }}>
          Search in<br />Action
        </h1>
        {/* Red accent bar */}
        <div style={{
          width: '100px',
          height: '8px',
          backgroundColor: '#d4564f'
        }} />
      </div>

      {/* INTERACTIVE ZONE - Search component */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '0',
        padding: '60px 60px',
        overflowY: 'auto'
      }}>
        <SearchDemo autoTriggerDelay={2000} />
      </div>

      {/* FOOTER ZONE - Metadata */}
      <div style={{
        borderTop: '0.5px solid #c8c6c1',
        padding: '30px 60px'
      }}>
        <div style={{
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          REAL-TIME RANKING — PAGERANK + BM25 + CVSS SCORING IN ACTION
        </div>
      </div>
    </div>
  );
}
