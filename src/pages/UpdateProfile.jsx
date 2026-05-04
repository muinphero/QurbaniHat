import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider.jsx';
import { authClient } from '../lib/auth-client.js';

export default function UpdateProfile() {
  const { user, updateUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await authClient.updateUser(updateUser, {
      image: form.get('image'),
      name: form.get('name'),
    });
    navigate('/my-profile');
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleUpdate}>
        <p className="eyebrow">Profile settings</p>
        <h1>Update Information</h1>
        <input name="name" defaultValue={user.name} placeholder="Name" required />
        <input name="image" type="url" defaultValue={user.photo} placeholder="Image URL" required />
        <button className="btn btn-dark full" disabled={loading} type="submit">
          {loading ? 'Updating...' : 'Update Information'}
        </button>
      </form>
    </section>
  );
}
