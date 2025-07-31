export default function Upgrade({ coin, setCoin, power, setPower }) {
  const handleUpgrade = () => {
    if (coin >= (10 * power)) {
      setCoin(coin - (10 * power));
      setPower(power + 1);
    } else {
      alert(`${10 * power}원이 필요합니다!`);
    }
  };

  return (
    <div style={{ position: "absolute", left: "42vw", zIndex: 1}}>
      <p>Power: {power}</p> 
      <button onClick={handleUpgrade}>{10 * power}coin으로 power 증가</button>
    </div>
  );
}