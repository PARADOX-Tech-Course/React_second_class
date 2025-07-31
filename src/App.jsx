import { useState } from "react";
import "./App.css";
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';

function App() {

  return (
    <>
      <TimerDisplay />
      <TimerControls />
    </>
  );
}

export default App;
