import { ArrowDownUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import AnimalCard from '../components/AnimalCard.jsx';
import Loader from '../components/Loader.jsx';
import useAnimals from '../hooks/useAnimals.js';

export default function Animals() {
  const { animals, loading } = useAnimals();
  const [sort, setSort] = useState('default');

  const sortedAnimals = useMemo(() => {
    const nextAnimals = [...animals];
    if (sort === 'low') nextAnimals.sort((a, b) => a.price - b.price);
    if (sort === 'high') nextAnimals.sort((a, b) => b.price - a.price);
    return nextAnimals;
  }, [animals, sort]);

  return (
    <section className="section page-section">
      <div className="toolbar">
        <div>
          <p className="eyebrow">Marketplace</p>
          <h1>All Animals</h1>
        </div>
        <label className="sort-control">
          <ArrowDownUp size={18} />
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="default">Default order</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </label>
      </div>
      {loading ? <Loader /> : <div className="card-grid">{sortedAnimals.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}</div>}
    </section>
  );
}
