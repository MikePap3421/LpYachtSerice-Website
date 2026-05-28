import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: '"Noto Sans", "Roboto", sans-serif',
            backgroundColor: '#f2f2f3',
            color: '#274688',
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Something went wrong</h1>
          <p style={{ color: '#1B263B', opacity: 0.8 }}>
            Please refresh the page to continue.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#274688',
              color: 'white',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '0.5rem',
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;