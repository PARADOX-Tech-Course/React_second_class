import Coin from "./component/Coin";
import Upgrade from "./component/Upgrade";
import { useState } from "react";
import "./App.css";

function App() {
  const [coin, setCoin] = useState(0);
  const [power, setPower] = useState(1);

  return (
    <div>
      <Coin coin={coin} setCoin={setCoin} power={power} />
      <Upgrade coin={coin} setCoin={setCoin} power={power} setPower={setPower} />
    </div>
  );
}

export default App;
