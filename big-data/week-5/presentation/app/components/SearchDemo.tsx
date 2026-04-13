'use client';

import { useState, useEffect } from 'react';
import { MockCVE } from '@/app/lib/mockData';

interface SearchDemoProps {
  autoTriggerDelay?: number;
}

export default function SearchDemo({ autoTriggerDelay = 2000 }: SearchDemoProps) {
  const [searchTerm, setSearchTerm] = useState('openssl');
  const [severity, setSeverity] = useState<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'>('HIGH');
  const [results, setResults] = useState<MockCVE[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [revealedResults, setRevealedResults] = useState(0);

  // Auto-trigger search after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch();
    }, autoTriggerDelay);

    return () => clearTimeout(timer);
  }, [autoTriggerDelay]);

  // Progressive reveal of results
  useEffect(() => {
    if (results.length === 0 || revealedResults >= results.length) return;

    const timer = setTimeout(() => {
      setRevealedResults((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [revealedResults, results.length]);

  const performSearch = async () => {
    setIsLoading(true);
    setRevealedResults(0);
    setHasSearched(true);

    try {
      const params = new URLSearchParams({
        library: searchTerm,
        severity: severity,
      });

      const response = await fetch(`/api/search?${params}`);
      const data = await response.json();

      setResults(data.results || []);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return '#e63329';
      case 'HIGH':
        return '#d9534f';
      case 'MEDIUM':
        return '#f0ad4e';
      case 'LOW':
        return '#5cb85c';
      default:
        return '#888888';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      {/* Search Interface */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
           <label style={{
             fontFamily: 'monospace',
             fontSize: '15px',
             fontWeight: '400',
             letterSpacing: '0.15em',
             textTransform: 'uppercase',
             color: '#888888',
             display: 'block',
             marginBottom: '0.5rem'
           }}>
             Library Name
           </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g., openssl, log4j, django"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #0a0a0a',
              fontFamily: 'Helvetica, sans-serif',
              fontSize: '18px',
              backgroundColor: '#ffffff'
            }}
          />
        </div>

        <div>
           <label style={{
             fontFamily: 'monospace',
             fontSize: '15px',
             fontWeight: '400',
             letterSpacing: '0.15em',
             textTransform: 'uppercase',
             color: '#888888',
             display: 'block',
             marginBottom: '0.5rem'
           }}>
             Minimum Severity
           </label>
            <select
             value={severity}
             onChange={(e) => setSeverity(e.target.value as any)}
             style={{
               width: '100%',
               padding: '0.75rem',
               border: '1px solid #0a0a0a',
               fontFamily: 'Helvetica, sans-serif',
               fontSize: '18px',
               backgroundColor: '#ffffff'
             }}
           >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
            <option value="CRITICAL">CRITICAL</option>
          </select>
        </div>
      </div>

       <button
         onClick={performSearch}
         disabled={isLoading}
         style={{
           padding: '0.75rem 1.5rem',
           backgroundColor: '#0a0a0a',
           color: '#f5f4f0',
           border: 'none',
           fontFamily: 'Helvetica, sans-serif',
           fontSize: '18px',
           fontWeight: '600',
           cursor: isLoading ? 'not-allowed' : 'pointer',
           opacity: isLoading ? 0.6 : 1,
           transition: 'opacity 200ms linear'
         }}
       >
        {isLoading ? 'SEARCHING...' : 'SEARCH'}
      </button>

      {/* Loading State */}
      {isLoading && !hasSearched && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: '#888888', fontFamily: 'monospace', fontSize: '18px' }}>
            SEARCHING VULNERABILITY DATABASE...
          </p>
        </div>
      )}

      {/* Results */}
      {hasSearched && !isLoading && (
        <div>
           <p style={{
             fontFamily: 'monospace',
             fontSize: '15px',
             fontWeight: '400',
             letterSpacing: '0.15em',
             textTransform: 'uppercase',
             color: '#888888',
             marginBottom: '1rem'
           }}>
             {results.length} RESULTS FOUND
           </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
            {results.slice(0, revealedResults).map((cve, index) => (
              <div
                 key={cve.id}
                 style={{
                   border: `2px solid ${getSeverityColor(cve.severity)}`,
                   padding: '1rem',
                   backgroundColor: '#ffffff',
                   animation: `slideInFromRight 400ms linear backwards`,
                   animationDelay: `${index * 100}ms`,
                   overflowWrap: 'break-word',
                   wordWrap: 'break-word',
                   wordBreak: 'break-word'
                 }}
               >
                <style>{`
                  @keyframes slideInFromRight {
                    from {
                      opacity: 0;
                      transform: translateX(100%);
                    }
                    to {
                      opacity: 1;
                      transform: translateX(0);
                    }
                  }
                `}</style>

                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                   <div>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '18px', color: '#0a0a0a' }}>
                       {cve.id}
                     </p>
                     <p style={{ margin: '0.25rem 0 0 0', fontSize: '16px', color: '#888888' }}>
                       {cve.library} {cve.version}
                     </p>
                   </div>
                   <div style={{
                     backgroundColor: getSeverityColor(cve.severity),
                     color: '#ffffff',
                     padding: '0.25rem 0.75rem',
                     fontFamily: 'monospace',
                     fontSize: '15px',
                     fontWeight: 'bold'
                   }}>
                     {cve.severity}
                   </div>
                </div>

                 <p style={{ margin: '0.75rem 0', fontSize: '18px', color: '#0a0a0a', lineHeight: '1.4', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                   {cve.description}
                 </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '1.5rem 1rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '0.5px solid #c8c6c1' }}>
                     {/* Column 1: CVSS Score */}
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #c8c6c1' }}>
                       <p style={{
                         fontFamily: 'monospace',
                         fontSize: '9px',
                         fontWeight: 'bold',
                         textTransform: 'uppercase',
                         color: '#888888',
                         margin: 0,
                         letterSpacing: '0.1em'
                       }}>
                         CVSS SCORE
                       </p>
                       <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0a0a0a' }}>
                         {cve.cvss.toFixed(1)}
                       </p>
                     </div>

                     {/* Column 2: Attack Vector */}
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #c8c6c1' }}>
                       <p style={{
                         fontFamily: 'monospace',
                         fontSize: '9px',
                         fontWeight: 'bold',
                         textTransform: 'uppercase',
                         color: '#888888',
                         margin: 0,
                         letterSpacing: '0.1em'
                       }}>
                         ATTACK VECTOR
                       </p>
                       <p style={{ margin: 0, fontSize: '16px', color: '#0a0a0a' }}>
                         {cve.attackVector}
                       </p>
                     </div>

                     {/* Column 3: Published Date */}
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #c8c6c1' }}>
                      <p style={{
                        fontFamily: 'monospace',
                        fontSize: '9px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#888888',
                        margin: 0,
                        letterSpacing: '0.1em'
                      }}>
                        PUBLISHED
                      </p>
                      <p style={{ margin: 0, fontSize: '16px', color: '#0a0a0a' }}>
                        {new Date(cve.published).toLocaleDateString()}
                      </p>
                    </div>

                     {/* Column 4: Severity */}
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #c8c6c1' }}>
                       <p style={{
                         fontFamily: 'monospace',
                         fontSize: '9px',
                         fontWeight: 'bold',
                         textTransform: 'uppercase',
                         color: '#888888',
                         margin: 0,
                         letterSpacing: '0.1em'
                       }}>
                         SEVERITY
                       </p>
                       <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: getSeverityColor(cve.severity) }}>
                         {cve.severity}
                       </p>
                     </div>

                     {/* Column 5: CWE ID */}
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #c8c6c1' }}>
                       <p style={{
                         fontFamily: 'monospace',
                         fontSize: '9px',
                         fontWeight: 'bold',
                         textTransform: 'uppercase',
                         color: '#888888',
                         margin: 0,
                         letterSpacing: '0.1em'
                       }}>
                         CWE ID
                       </p>
                       <p style={{ margin: 0, fontSize: '16px', color: '#0a0a0a', fontFamily: 'monospace' }}>
                         {cve.cwe}
                       </p>
                     </div>

                     {/* Column 6: CWE Name */}
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #c8c6c1' }}>
                       <p style={{
                         fontFamily: 'monospace',
                         fontSize: '9px',
                         fontWeight: 'bold',
                         textTransform: 'uppercase',
                         color: '#888888',
                         margin: 0,
                         letterSpacing: '0.1em'
                       }}>
                         WEAKNESS
                       </p>
                       <p style={{ margin: 0, fontSize: '16px', color: '#666' }}>
                         {cve.cweName}
                       </p>
                     </div>
                  </div>
              </div>
            ))}
          </div>

           {revealedResults < results.length && (
             <div style={{ textAlign: 'center', padding: '1rem', color: '#888888', fontFamily: 'monospace', fontSize: '15px' }}>
               Loading more results...
             </div>
           )}
        </div>
      )}

      {hasSearched && !isLoading && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#888888', fontFamily: 'monospace', fontSize: '18px' }}>
          NO RESULTS FOUND FOR THIS SEARCH
        </div>
      )}
    </div>
  );
}
