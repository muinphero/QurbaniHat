import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>QurbaniHat</h3>
        <p>A trusted digital livestock market connecting families with carefully listed Qurbani animals.</p>
      </div>
      <div>
        <h4>Contact</h4>
        <p><MapPin size={16} /> Dhaka, Bangladesh</p>
        <p><Phone size={16} /> {import.meta.env.VITE_SUPPORT_PHONE || '+8801700000000'}</p>
        <p><Mail size={16} /> {import.meta.env.VITE_SUPPORT_EMAIL || 'support@qurbanihat.local'}</p>
      </div>
      <div>
        <h4>Social</h4>
        <div className="socials">
          <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
          <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
          <a href="https://twitter.com" aria-label="Twitter"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
}
