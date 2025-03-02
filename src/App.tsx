import React, { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import Gratitudes from './Gratitudes';



function App() {
  useEffect(() => {
    window.Main.removeLoading();
  }, []);

  return (
    <AppLayout>
      <Gratitudes />
    </AppLayout>
  );
}

export default App;
