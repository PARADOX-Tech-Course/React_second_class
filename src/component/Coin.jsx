import { useState, useRef, useEffect } from "react";

export default function Coin() {
  const [coin, setCoin] = useState(0);
  const div = useRef(null);
  const text = useRef(null);
  
  const earn = () => {
    if (div.current) div.current.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()%0.5})`;
    setCoin(coin+1);
  };

  useEffect(() => {
    if (text.current) text.current.textContent = coin;
  }, [coin]);

  return (
    <div ref={div} style={{
        position: "absolute",
        inset: 0,
      }}>
      <p ref={text} style={{fontWeight: 'bolder'}}>0</p>
      <button onClick={earn}>Earn</button>
    </div>
  )
}