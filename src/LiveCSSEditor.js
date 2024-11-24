import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import './css/styles.css';

function LiveCSSEditor() {
  return (
    <LiveProvider code={`
      () => (
        <div style={{
          backgroundColor: 'var(--color-primary)',
          padding: '20px',
          color: 'var(--color-white)',
          fontFamily: '"ABC Diatype", sans-serif'
        }}>
          <h1 style={{
            fontSize: '4.4rem',
            fontWeight: 'bold',
            lineHeight: 1.5,
            marginBottom: '20px'
          }}>Live Style Editor</h1>
          <p style={{
            fontSize: '2rem',
            lineHeight: 1.5,
            marginBottom: '20px'
          }}>
            Edit the styles in the editor to see changes in real-time.
          </p>
          <button style={{
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-accent-text)',
            padding: '1.4rem 3.2rem',
            border: 0,
            borderRadius: '32px',
            cursor: 'pointer',
            fontSize: '1.8rem',
            fontWeight: 'bold'
          }}>
            Example Button
          </button>
        </div>
      )
    `}>
      <div style={{ 
        padding: '40px 20px', 
        backgroundColor: 'var(--color-primary)',
        borderTop: '1px solid var(--color-grey-3)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '20px'
          }}>
            <div style={{
              backgroundColor: '#1e1e1e',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <LiveEditor 
                style={{
                  fontFamily: 'Consolas, Monaco, monospace',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}
              />
            </div>
            <div style={{
              backgroundColor: '#1e1e1e',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <LivePreview />
            </div>
          </div>
          <LiveError 
            style={{ 
              color: '#ff5555',
              backgroundColor: 'rgba(255,85,85,0.1)',
              padding: '10px',
              borderRadius: '4px',
              marginTop: '10px'
            }}
          />
        </div>
      </div>
    </LiveProvider>
  );
}

export default LiveCSSEditor;
