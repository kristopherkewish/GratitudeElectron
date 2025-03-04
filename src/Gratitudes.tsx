import React from 'react';
import useGratitudes from './useGratitudes';
import DatePicker from './DatePicker';
import GratitudeList from './GratitudeList';
import AddGratitude from './AddGratitude';
import TargetAchieved from './TargetAchieved';

export default function Gratitudes() {
  const { date, gratitudes, addGratitude, removeGratitude, changeDate } = useGratitudes();
  const hasHitDailyTarget = gratitudes.length >= 5;

  return (
    <>
      <DatePicker date={date} changeDate={changeDate} />
      <TargetAchieved hasHitDailyTarget={hasHitDailyTarget} />
      <GratitudeList gratitudes={gratitudes} removeGratitude={removeGratitude} />
      <AddGratitude addGratitude={addGratitude} />
    </>
  );
}
