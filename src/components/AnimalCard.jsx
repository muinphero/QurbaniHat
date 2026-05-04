import { Link } from 'react-router-dom';
import { MapPin, Scale, Tag } from 'lucide-react';

export default function AnimalCard({ animal }) {
  return (
    <article className="animal-card animate__animated animate__fadeInUp">
      <img src={animal.image} alt={animal.name} />
      <div className="animal-card-body">
        <div className="chip-row">
          <span>{animal.category}</span>
          <span>{animal.type}</span>
        </div>
        <h3>{animal.name}</h3>
        <p className="muted">{animal.breed}</p>
        <div className="animal-meta">
          <span><Tag size={16} /> Tk {animal.price.toLocaleString()}</span>
          <span><Scale size={16} /> {animal.weight} kg</span>
          <span><MapPin size={16} /> {animal.location}</span>
        </div>
        <Link className="btn btn-dark full" to={`/details-page/${animal.id}`}>Details</Link>
      </div>
    </article>
  );
}
