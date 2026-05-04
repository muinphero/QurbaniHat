import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Chrome } from 'lucide-react';
import { useAuth } from '../providers/AuthProvider.jsx';

export default function Login() {
  const { login, googleLogin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const target = location.state?.from || '/';

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      await login({ email: form.get('email'), password: form.get('password') });
      toast.success('Login successful');
      navigate(target);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    await googleLogin();
    navigate('/');
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <p className="eyebrow">Welcome back</p>
        <h1>Login</h1>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button className="btn btn-dark full" disabled={loading} type="submit">{loading ? 'Logging in...' : 'Login'}</button>
        <button className="btn btn-ghost full" type="button" onClick={handleGoogle}><Chrome size={18} /> Continue with Google</button>
        <p className="muted">New to QurbaniHat? <Link to="/register">Create an account</Link></p>
      </form>
    </section>
  );
}
