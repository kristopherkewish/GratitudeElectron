import React from 'react';
import { Gratitude } from './types';
export default function GratitudeList({
  gratitudes,
  removeGratitude
}: {
  gratitudes: Gratitude[];
  removeGratitude: (id: number) => void;
}) {
  return (
    <div className="flex flex-col space-y-1 w-1/2">
      {gratitudes.map((gratitude, index) => (
        <div key={gratitude.id} className="px-4 dark:text-gray-200 flex justify-between gap-32">
          {index + 1}. {gratitude.gratitude}
          <div className="text-red-500 hover:text-white cursor-pointer" onClick={() => removeGratitude(gratitude.id)}>
            X
          </div>
        </div>
      ))}
    </div>
  );
}
