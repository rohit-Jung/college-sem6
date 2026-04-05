'use client';

import SearchDemo from '@/app/components/SearchDemo';

export default function SearchDemoSlide() {
  return (
    <div className="w-full h-full bg-paper flex flex-col justify-between" style={{ padding: '10%' }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col" style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <h2 style={{
          fontSize: '32px',
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: '700',
          color: '#0a0a0a',
          marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          LIVE SEARCH DEMO
        </h2>

        <div style={{
          height: '4px',
          backgroundColor: '#e63329',
          width: '33%',
          marginBottom: '2rem'
        }} />

        {/* Search Interface Placeholder */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflowY: 'auto' }}>
          <SearchDemo autoTriggerDelay={2000} />
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
          [4] PageRank Adaptation for Vulnerability Networks
        </div>
      </div>
    </div>
  );
}

