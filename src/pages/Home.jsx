import { Link } from 'react-router-dom';
import { CheckCircle2, HeartHandshake, ShieldCheck, Truck } from 'lucide-react';
import AnimalCard from '../components/AnimalCard.jsx';
import Loader from '../components/Loader.jsx';
import useAnimals from '../hooks/useAnimals.js';

export default function Home() {
  const { animals, loading } = useAnimals();
  const featured = animals.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-content animate__animated animate__fadeInLeft">
          <p className="eyebrow">Verified livestock for Eid-ul-Adha</p>
          <h1>Book your Qurbani animal with clarity, care, and confidence.</h1>
          <p>
            Explore healthy cows and goats from trusted farms, compare details, and reserve the right animal after login.
          </p>
          <Link className="btn btn-light" to="/animals">Browse Animals</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured</p>
          <h2>Ready for Booking</h2>
        </div>
        {loading ? <Loader /> : <div className="card-grid">{featured.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}</div>}
      </section>

      <section className="section split-band">
        <div>
          <p className="eyebrow">Qurbani Tips</p>
          <h2>Choose with attention</h2>
          <div className="tips-list">
            <p><CheckCircle2 /> Check age, weight, health, and visible body condition before booking.</p>
            <p><CheckCircle2 /> Compare local breeds with your family size and budget in mind.</p>
            <p><CheckCircle2 /> Keep delivery address and phone number accurate during booking.</p>
          </div>
        </div>
        <div className="breed-panel">
          <p className="eyebrow">Top Breeds</p>
          <h2>Popular this season</h2>
          <div className="breed-list">
            <span>Local Deshi</span>
            <span>Brahman Cross</span>
            <span>Black Bengal</span>
            <span>Jamunapari</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div><ShieldCheck /><strong>Verified Listings</strong><span>Clear animal details</span></div>
        <div><HeartHandshake /><strong>Easy Booking</strong><span>Simple private form</span></div>
        <div><Truck /><strong>Local Coverage</strong><span>Major farm regions</span></div>
      </section>
    </>
  );
}
