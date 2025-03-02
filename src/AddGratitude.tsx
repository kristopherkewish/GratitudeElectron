import React, { useState } from 'react';

export default function AddGratitude({ addGratitude }: { addGratitude: (gratitude: string) => void }) {
  const [newGratitude, setNewGratitude] = useState<string>('');

  const handleAddGratitude = () => {
    addGratitude(newGratitude);
    setNewGratitude('');
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="I am grateful for..."
        className="px-4 py-2 rounded-md border dark:bg-slate-700 dark:border-slate-600 dark:text-gray-600"
        value={newGratitude}
        onChange={(e) => setNewGratitude(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddGratitude();
          }
        }}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleAddGratitude}
      >
        Add
      </button>
    </div>
  );
}
