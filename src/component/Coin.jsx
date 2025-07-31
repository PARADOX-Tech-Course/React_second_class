import { useState, useRef } from "react";

export default function Coin({power}) {
  const [coin, setCoin] = useState(0);
  const div = useRef(null);
  
  const earn = () => {
    if (div.current) div.current.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()%0.5})`;
    setCoin(coin+power);
  };

  return (
    <div ref={div} style={{
        position: "absolute",
        inset: 0,
      }}>
      <p style={{fontWeight: 'bolder'}}>{coin}$</p>
      <button onClick={earn}>Earn</button>
    </div>
  )
}