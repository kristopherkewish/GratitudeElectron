import { useState, useEffect } from 'react';
import { Gratitude } from './types';
import { api } from './api';

export default function useGratitudes() {
  const [gratitudes, setGratitudes] = useState<Gratitude[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGratitudes() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.getGratitudes(date);
        setGratitudes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    loadGratitudes();
  }, [date]);

  return {
    gratitudes,
    date,
    isLoading,
    error,
    addGratitude: async (gratitude: string) => {
      try {
        const newGratitude = await api.addGratitude(date, gratitude);
        setGratitudes([...gratitudes, newGratitude]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to add gratitude');
      }
    },
    removeGratitude: async (id: number) => {
      try {
        await api.deleteGratitude(id);
        setGratitudes(gratitudes.filter((g) => g.id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete gratitude');
      }
    },
    changeDate: (direction: 'prev' | 'next') => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + (direction === 'prev' ? -1 : 1));
      setDate(newDate);
    }
  };
}
