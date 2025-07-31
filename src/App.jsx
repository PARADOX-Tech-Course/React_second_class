import Coin from "./component/Coin";
import Upgrade from "./component/Upgrade";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [coin, setCoin] = useState(0);
  const [power, setPower] = useState(1);

  useEffect(() => {
    alert(`Power가 ${power}로 업그레이드 되었습니다!`);
  }, [power]);

  return (
    <div>
      <Upgrade coin={coin} setCoin={setCoin} power={power} setPower={setPower} />
      <Coin coin={coin} setCoin={setCoin} power={power} />
    </div>
  );
}

export default App;
