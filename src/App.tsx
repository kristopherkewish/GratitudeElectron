import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';

import SwitchDarkMode from './SwitchDarkMode';

type Gratitude = {
  id: number;
  date: Date;
  gratitude: string;
};

function App() {
  useEffect(() => {
    window.Main.removeLoading();
  }, []);
  const [date, setDate] = useState<Date>(new Date());
  const [newGratitude, setNewGratitude] = useState<string>('');
  const [gratitudes, setGratitudes] = useState<Gratitude[]>([]);

  const addGratitude = (gratitude: string) => {
    setGratitudes([...gratitudes, { id: gratitudes.length + 1, date, gratitude }]);
    setNewGratitude('');
  };

  const removeGratitude = (id: number) => {
    setGratitudes(gratitudes.filter((gratitude) => gratitude.id !== id));
  };

  const changeDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + (direction === 'prev' ? -1 : 1));

    setDate(newDate);
  };

  return (
    <div className="flex flex-col">
      {window.Main && (
        <div className="flex-none">
          <AppBar />
        </div>
      )}
      <div className="flex-auto">
        <div className="ml-4 mr-4 mt-4 flex items-center justify-between">
          <SwitchDarkMode />
        </div>
        <div className="flex flex-col justify-center items-center h-full pt-16 space-y-6">
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
          <div className="flex flex-col space-y-1 w-1/2">
            {gratitudes
              .filter((gratitude) => gratitude.date.toLocaleDateString() === date.toLocaleDateString())
              .map((gratitude, index) => (
                <div key={gratitude.id} className="px-4 dark:text-gray-200 flex justify-between gap-32">
                  {index + 1}. {gratitude.gratitude}
                  <div
                    className="text-red-500 hover:text-white cursor-pointer"
                    onClick={() => removeGratitude(gratitude.id)}
                  >
                    X
                  </div>
                </div>
              ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="I am grateful for..."
              className="px-4 py-2 rounded-md border dark:bg-slate-700 dark:border-slate-600 dark:text-gray-600"
              value={newGratitude}
              onChange={(e) => setNewGratitude(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addGratitude(newGratitude);
                }
              }}
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => addGratitude(newGratitude)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
