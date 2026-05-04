import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Calendar, MapPin, Scale, Tag } from 'lucide-react';
import animals from '../data/animals.json';
import { useAuth } from '../providers/AuthProvider.jsx';

export default function AnimalDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const animal = animals.find((item) => item.id === Number(id));

  if (!animal) {
    return (
      <section className="section page-section center">
        <h1>Animal not found</h1>
        <p className="muted">The listing you are looking for is unavailable.</p>
      </section>
    );
  }

  const handleBooking = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success(`Booking request placed for ${animal.name}`);
  };

  return (
    <section className="section details-layout">
      <div className="details-media">
        <img src={animal.image} alt={animal.name} />
      </div>
      <div className="details-info">
        <p className="eyebrow">{animal.category}</p>
        <h1>{animal.name}</h1>
        <p>{animal.description}</p>
        <div className="detail-stats">
          <span><Tag /> Tk {animal.price.toLocaleString()}</span>
          <span><Scale /> {animal.weight} kg</span>
          <span><Calendar /> {animal.age} years</span>
          <span><MapPin /> {animal.location}</span>
        </div>
        <form className="form-panel" onSubmit={handleBooking}>
          <h2>Booking Form</h2>
          <input name="name" defaultValue={user?.name} placeholder="Your name" required />
          <input name="email" type="email" defaultValue={user?.email} placeholder="Your email" required />
          <input name="phone" type="tel" placeholder="Phone number" required />
          <textarea name="address" rows="4" placeholder="Delivery address" required />
          <button className="btn btn-dark full" type="submit">Place Booking</button>
        </form>
      </div>
    </section>
  );
}
