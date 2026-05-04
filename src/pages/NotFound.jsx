import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="eyebrow">404</p>
      <h1>Route not found</h1>
      <p className="muted">This page is outside the QurbaniHat market map.</p>
      <Link className="btn btn-dark" to="/">Back to Home</Link>
    </section>
  );
}
