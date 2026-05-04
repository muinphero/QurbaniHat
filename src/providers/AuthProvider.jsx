import { createContext, useContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

const defaultAvatar =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=300&q=80';

const readStoredJson = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredJson('qurbanihat-user', null));
  const [registeredUsers, setRegisteredUsers] = useState(() => readStoredJson('qurbanihat-registered-users', []));
  const [loading, setLoading] = useState(false);

  const persistUser = (nextUser) => {
    setUser(nextUser);
    if (nextUser) localStorage.setItem('qurbanihat-user', JSON.stringify(nextUser));
    else localStorage.removeItem('qurbanihat-user');
  };

  const register = async ({ name, email, photo, password }) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    if (!name || !email || !password) {
      setLoading(false);
      throw new Error('Please fill in all required fields.');
    }
    if (password.length < 6) {
      setLoading(false);
      throw new Error('Password must be at least 6 characters.');
    }
    if (registeredUsers.some((item) => item.email === email)) {
      setLoading(false);
      throw new Error('This email is already registered.');
    }
    const nextUsers = [...registeredUsers, { name, email, photo: photo || defaultAvatar, password }];
    setRegisteredUsers(nextUsers);
    localStorage.setItem('qurbanihat-registered-users', JSON.stringify(nextUsers));
    setLoading(false);
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    const existing = registeredUsers.find((item) => item.email === email && item.password === password);
    if (!existing) {
      setLoading(false);
      throw new Error('Invalid email or password.');
    }
    persistUser({ name: existing.name, email: existing.email, photo: existing.photo || defaultAvatar });
    setLoading(false);
  };

  const googleLogin = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    persistUser({
      name: 'Google Guest',
      email: 'google.user@qurbanihat.local',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    });
    setLoading(false);
    toast.success('Google login successful');
  };

  const logout = () => {
    persistUser(null);
    toast.success('Logged out successfully');
  };

  const updateUser = async ({ name, photo }) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const nextUser = { ...user, name: name || user.name, photo: photo || user.photo };
    persistUser(nextUser);
    setLoading(false);
    toast.success('Profile updated successfully');
  };

  const value = useMemo(
    () => ({ user, loading, register, login, googleLogin, logout, updateUser }),
    [user, loading, registeredUsers],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
