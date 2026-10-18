import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled app error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFDF9', color: '#33251D', padding: '1.5rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <div style={{ maxWidth: '440px', padding: '2rem', borderRadius: '1rem', border: '1px solid #FFC107', backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#E65100', marginBottom: '0.5rem' }}>जय छठी मैया — SGChhathpooja</h2>
            <p style={{ fontSize: '0.875rem', color: '#75665D', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              वेबसाइट लोड करने में कोई तकनीकी समस्या आई। कृपया पृष्ठ को रीलोड करें।
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{ backgroundColor: '#E65100', color: '#FFFFFF', padding: '0.625rem 1.25rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              पृष्ठ पुनः लोड करें / Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <RootErrorBoundary>
    <App />
  </RootErrorBoundary>
);
