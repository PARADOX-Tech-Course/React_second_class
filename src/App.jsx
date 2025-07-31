import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef(null)
  
  useEffect(() => {
    console.log('컴포넌트 마운트')
    divRef.current.style.border = '1px solid red'
  }, [])

  return (
    <div ref = {divRef}>
      <h1>Hook 과제</h1>
    </div>
  );
}

export default App;
