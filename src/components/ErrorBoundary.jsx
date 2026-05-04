import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <section className="runtime-error">
          <p className="eyebrow">Runtime Error</p>
          <h1>QurbaniHat could not render</h1>
          <p>{this.state.error.message}</p>
        </section>
      );
    }

    return this.props.children;
  }
}
