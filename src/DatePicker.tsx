import React from 'react';

export default function DatePicker({
  date,
  changeDate
}: {
  date: Date;
  changeDate: (direction: 'prev' | 'next') => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-1">
      <h1 className="text-2xl dark:text-gray-200">Daily Gratitude</h1>
      <div className="flex items-center gap-4">
        <button
          className="px-2 py-1 text-xl rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 dark:hover:text-gray-700"
          onClick={() => changeDate('prev')}
        >
          ←
        </button>
        <h2 className="text-xl dark:text-gray-400">{date.toLocaleDateString()}</h2>
        <button
          className="px-2 py-1 text-xl rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 dark:hover:text-gray-700"
          onClick={() => changeDate('next')}
        >
          →
        </button>
      </div>
    </div>
  );
}
