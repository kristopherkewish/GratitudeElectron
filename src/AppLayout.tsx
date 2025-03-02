import React from "react";
import AppBar from "./AppBar";
import SwitchDarkMode from "./SwitchDarkMode";

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
          {children}
        </div>
      </div>
    </div>
  );
}
