import { Link } from 'react-router-dom';
import { Mail, UserRound } from 'lucide-react';
import { useAuth } from '../providers/AuthProvider.jsx';

export default function MyProfile() {
  const { user } = useAuth();

  return (
    <section className="section profile-page">
      <div className="profile-card">
        <img src={user.photo} alt={user.name} />
        <div>
          <p className="eyebrow">My Profile</p>
          <h1>{user.name}</h1>
          <p><Mail size={18} /> {user.email}</p>
          <p><UserRound size={18} /> Logged-in customer</p>
          <Link className="btn btn-dark" to="/update-profile">Update Information</Link>
        </div>
      </div>
    </section>
  );
}
