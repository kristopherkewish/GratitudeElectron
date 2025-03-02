import React from 'react';
import useGratitudes from './useGratitudes';
import DatePicker from './DatePicker';
import GratitudeList from './GratitudeList';
import AddGratitude from './AddGratitude';

export default function Gratitudes() {
  const { date, gratitudes, addGratitude, removeGratitude, changeDate } = useGratitudes();

  const gratitudesByDate = gratitudes.filter(
    (gratitude) => gratitude.date.toLocaleDateString() === date.toLocaleDateString()
  );

  return (
    <>
      <DatePicker date={date} changeDate={changeDate} />
      <GratitudeList gratitudes={gratitudesByDate} removeGratitude={removeGratitude} />
      <AddGratitude addGratitude={addGratitude} />
    </>
  );
}
