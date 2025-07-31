import { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';

function App() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(1500);
  const [mods, setMods] = useState(true);

  
  useEffect(()=>{
    if(start){
      const interval = setInterval(()=>{
        setTime(time=>time-1);
      }, 1000);
      if(time===0){
        setMods(!mods);
        mods?setTime(1500):setTime(300);
      }
      return () => clearInterval(interval);
    }
  }, [start, mods]);
  

  const timerOn = ()=>{
    setStart(!start);
  }
  const changeMods = ()=>{
    setMods(!mods);
  }

  return (
    <>
      <TimerDisplay time={time} />
      <TimerControls mods={mods} start={start} timerOn={timerOn} changeMods={changeMods} />
    </>
  );
}

export default App;