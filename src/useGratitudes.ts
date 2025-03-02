import { useState } from "react";
import { Gratitude } from "./types";

export default function useGratitudes() {
  const [gratitudes, setGratitudes] = useState<Gratitude[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  return {
    gratitudes,
    date,
    addGratitude: (gratitude: string) => {
      setGratitudes([...gratitudes, { id: gratitudes.length + 1, date, gratitude }]);
    },
    removeGratitude: (id: number) => {
      setGratitudes(gratitudes.filter((gratitude) => gratitude.id !== id));
    },
    changeDate: (direction: 'prev' | 'next') => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + (direction === 'prev' ? -1 : 1));
      setDate(newDate);
    }
  }
}