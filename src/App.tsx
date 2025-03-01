import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';

import SwitchDarkMode from './SwitchDarkMode';

type Gratitudes = {
  date: Date;
  gratitudes: string[];
};

let gratitudesMockData: Gratitudes[] = [
  {
    date: new Date('2025-03-01'),
    gratitudes: ['I am grateful for my family', 'I am grateful for a delicious meal', 'I am grateful for sunny weather']
  },
  {
    date: new Date('2025-03-02'),
    gratitudes: ['I am grateful for good books', 'I am grateful for music', 'I am grateful for my home']
  },
  {
    date: new Date('2025-03-03'),
    gratitudes: ['I am grateful for my friends', 'I am grateful for my health', 'I am grateful for new opportunities']
  }
];

function App() {
  useEffect(() => {
    window.Main.removeLoading();
  }, []);
  const [date, setDate] = useState<Date>(new Date());
  const [gratitudes, setGratitudes] = useState<string[]>([]);
  const [gratitude, setGratitude] = useState<string>('');

  useEffect(() => {
    const gratitudesForDate = getGratitudesForDate(date);
    setGratitudes(gratitudesForDate?.gratitudes || []);
  }, [date]);

  const getGratitudesForDate = (date: Date) => {
    return gratitudesMockData.find((gratitude) => gratitude.date.toLocaleDateString() === date.toLocaleDateString());
  };

  const saveGratitudes = () => {
    const updatedGratitudesMockData = gratitudesMockData.map((g) => {
      if (g.date.toLocaleDateString() === date.toLocaleDateString()) {
        return { ...g, gratitudes };
      }
      return g;
    });

    // If no existing entry for this date, add a new one
    if (!updatedGratitudesMockData.find((g) => g.date.toLocaleDateString() === date.toLocaleDateString())) {
      updatedGratitudesMockData.push({
        date: new Date(date),
        gratitudes
      });
    }

    // Update the mock data
    gratitudesMockData = updatedGratitudesMockData;
  };

  const addGratitude = (gratitude: string) => {
    setGratitudes([...gratitudes, gratitude]);
    setGratitude('');
  };

  const removeGratitude = (index: number) => {
    setGratitudes(gratitudes.filter((_, i) => i !== index));
  };

  const changeDate = (direction: 'prev' | 'next') => {
    saveGratitudes();

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
            {gratitudes.map((gratitude, index) => (
              <div key={index} className="px-4 dark:text-gray-200 flex justify-between gap-32">
                {index + 1}. {gratitude}
                <div className="text-red-500 hover:text-white cursor-pointer" onClick={() => removeGratitude(index)}>
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
              value={gratitude}
              onChange={(e) => setGratitude(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addGratitude(gratitude);
                }
              }}
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => addGratitude(gratitude)}
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
