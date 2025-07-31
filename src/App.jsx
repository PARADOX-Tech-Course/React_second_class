import { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';

function App() {
  const [time, setTime] = useState(1500);
  useEffect(()=>{
      const interval = setInterval(()=>{
        setTime(time=>time-1);
      }, 1000);
      if(time===0){
        setTime(300);
      }
      return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <TimerDisplay time={time} />
    </>
  );
}

export default App;
