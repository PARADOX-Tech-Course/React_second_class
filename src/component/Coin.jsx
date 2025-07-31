import { useRef } from "react";

export default function Coin({ coin, setCoin, power }) {
  const div = useRef(null);

  const earn = () => {
    if (div.current) div.current.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()%0.5})`;
    setCoin(coin + power);
  };

  return (
    <div ref={div} style={{ position: "absolute", inset: 0 }}>
      <p style={{ fontWeight: 'bolder' }}>{coin}$</p>
      <button onClick={earn}>Earn</button>
    </div>
  );
}