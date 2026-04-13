export default function DatasetSourceSlide() {
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
          DATASET & SOURCE
        </div>
        <div style={{ viewTransitionName: 'heading-content',
          fontFamily: '"Monaco", "Menlo", monospace',
          fontSize: '8px',
          fontWeight: '400',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888888'
        }}>
          SLIDE 005
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
        {/* Three-column grid for dataset features */}
        <div style={{ viewTransitionName: 'heading-content',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* COLUMN 1: Dataset Info */}
          <div style={{ viewTransitionName: 'heading-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderLeft: '3px solid #d4564f',
            paddingLeft: '24px'
          }}>
            <div style={{ viewTransitionName: 'heading-content',
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#888888'
            }}>
              SOURCE DATABASE
            </div>

            <div style={{ viewTransitionName: 'heading-content',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  OFFICIAL NAME
                </div>
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '600',
                  color: '#0a0a0a',
                  margin: '0',
                  lineHeight: '1.4'
                }}>
                  National Vulnerability<br />Database 2.0
                </p>
              </div>

              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  CUSTODIAN
                </div>
                <p style={{
                  fontSize: '15px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  margin: '0'
                }}>
                  NIST (National Institute<br />of Standards & Technology)
                </p>
              </div>

              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  ACCESS
                </div>
                <p style={{
                  fontSize: '15px',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontWeight: '400',
                  color: '#d4564f',
                  margin: '0'
                }}>
                  https://nvd.nist.gov/
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Dataset Specifications */}
          <div style={{ viewTransitionName: 'heading-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderLeft: '3px solid #0a0a0a',
            paddingLeft: '24px'
          }}>
            <div style={{ viewTransitionName: 'heading-content',
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#888888'
            }}>
              DATASET SPECIFICATIONS
            </div>

            <div style={{ viewTransitionName: 'heading-content',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  TOTAL CVE RECORDS
                </div>
                <p style={{
                  fontSize: '18px',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontWeight: '700',
                  color: '#0a0a0a',
                  margin: '0'
                }}>
                  342,000+
                </p>
              </div>

              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  TIME COVERAGE
                </div>
                <p style={{
                  fontSize: '16px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  margin: '0'
                }}>
                  2002 — Present<br />
                  (24+ years)
                </p>
              </div>

              <div>
                <div style={{ viewTransitionName: 'heading-content',
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '8px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginBottom: '8px'
                }}>
                  UPDATE CADENCE
                </div>
                <p style={{
                  fontSize: '15px',
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: '400',
                  color: '#0a0a0a',
                  margin: '0'
                }}>
                  Daily + Real-time API<br />
                  JSON feed
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Data Available */}
          <div style={{ viewTransitionName: 'heading-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderLeft: '3px solid #0a0a0a',
            paddingLeft: '24px'
          }}>
            <div style={{ viewTransitionName: 'heading-content',
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: '9px',
              fontWeight: '400',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#888888'
            }}>
              DATA FIELDS USED
            </div>

            <div style={{ viewTransitionName: 'heading-content',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {[
                { label: 'CVE_ID', desc: 'Unique identifier' },
                { label: 'CVSS_SCORE', desc: 'Severity 0.0–10.0' },
                { label: 'DESCRIPTION', desc: 'Full vulnerability text' },
                { label: 'CPE_MATCH', desc: 'Affected products' },
                { label: 'PUBLISHED_DATE', desc: 'Disclosure date' },
                { label: 'REFERENCE_URLS', desc: 'External links' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ viewTransitionName: 'heading-content',
                    fontFamily: '"Monaco", "Menlo", monospace',
                    fontSize: '8px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#d4564f',
                    marginBottom: '4px'
                  }}>
                    {item.label}
                  </div>
                  <p style={{
                    fontSize: '15px',
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: '400',
                    color: '#666',
                    margin: '0'
                  }}>
                    {item.desc}
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
            DATA SOURCE — AUTHORITATIVE VULNERABILITY REPOSITORY OPERATED BY NIST
          </div>
        </div>
      </div>
    </div>
  );
}
