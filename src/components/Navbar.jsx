import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Beef, Menu, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../providers/AuthProvider.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/');
  };

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <span className="brand-mark"><Beef size={24} /></span>
        <span>QurbaniHat</span>
      </Link>
      <button className="icon-button mobile-only" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'} onClick={() => setOpen(false)}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/animals">All Animals</NavLink>
        {user ? (
          <>
            <NavLink to="/my-profile">My Profile</NavLink>
            <img className="avatar" src={user.photo} alt={user.name} />
            <button className="btn btn-ghost" type="button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink className="btn btn-ghost" to="/login">Login</NavLink>
            <NavLink className="btn btn-dark" to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
