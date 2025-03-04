import React from 'react';

export default function DatePicker({
  date,
  changeDate
}: {
  date: Date;
  changeDate: (direction: 'prev' | 'next') => void;
}) {
  const dateFormatter = new Intl.DateTimeFormat('en-AU');

  return (
    <div className="flex flex-col justify-center items-center space-y-1">
      <div className="bg-gratitudeBrown rounded-md py-2 px-10">
        <h1 className="text-2xl dark:text-gratitudeWhite">Daily Gratitude</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="px-2 py-1 text-xl rounded-md hover:bg-gray-200 dark:hover:bg-gratitudeBrown dark:hover:text-gratitudeWhite text-gratitudeBrown"
          onClick={() => changeDate('prev')}
        >
          ←
        </button>
        <h2 className="text-xl dark:text-gratitudeBrown">{dateFormatter.format(date)}</h2>
        <button
          className="px-2 py-1 text-xl rounded-md hover:bg-gray-200 dark:hover:bg-gratitudeBrown dark:hover:text-gratitudeWhite text-gratitudeBrown"
          onClick={() => changeDate('next')}
        >
          →
        </button>
      </div>
    </div>
  );
}
