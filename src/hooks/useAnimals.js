import { useEffect, useState } from 'react';
import animalsData from '../data/animals.json';

export default function useAnimals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimals(animalsData);
      setLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, []);

  return { animals, loading };
}
