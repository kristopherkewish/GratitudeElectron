import React from "react";

export default function TargetAchieved({ hasHitDailyTarget }: { hasHitDailyTarget: boolean }) {
  return hasHitDailyTarget ? (
    <div className="text-center text-gratitudeBrown">
      <p>You hit your daily gratitude target!</p>
    </div>
  ) : (
    null
  );
}
