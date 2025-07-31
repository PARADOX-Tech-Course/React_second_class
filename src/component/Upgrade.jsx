import React from "react";

export default function Upgrade({ coin, setCoin, power, setPower }) {
  const handleUpgrade = () => {
    if (coin >= 10) {
      setCoin(coin - 10);
      setPower(power + 1);
    } else {
      alert("10원이 필요합니다!");
    }
  };

  return (
    <div style={{ position: "absolute", top: 100, left: 20 }}>
      <button onClick={handleUpgrade}>업그레드 (+1 Power, 10원 소모)</button>
    </div>
  );
}