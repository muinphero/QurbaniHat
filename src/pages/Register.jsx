import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Chrome } from 'lucide-react';
import { useAuth } from '../providers/AuthProvider.jsx';

export default function Register() {
  const { register, googleLogin, loading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      await register({
        name: form.get('name'),
        email: form.get('email'),
        photo: form.get('photo'),
        password: form.get('password'),
      });
      toast.success('Registration successful. Please login.');
      navigate('/login');
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
      <form className="auth-card" onSubmit={handleRegister}>
        <p className="eyebrow">Join the market</p>
        <h1>Register</h1>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="photo" type="url" placeholder="Photo URL" />
        <input name="password" type="password" placeholder="Password" required />
        <button className="btn btn-dark full" disabled={loading} type="submit">{loading ? 'Creating account...' : 'Register'}</button>
        <button className="btn btn-ghost full" type="button" onClick={handleGoogle}><Chrome size={18} /> Continue with Google</button>
        <p className="muted">Already registered? <Link to="/login">Login here</Link></p>
      </form>
    </section>
  );
}
