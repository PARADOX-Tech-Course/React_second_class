import Coin from "./component/Coin";
import Upgrade from "./component/Upgrade";
import { useState } from "react";
import "./App.css";

function App() {
  const [coin, setCoin] = useState(0);
  const [power, setPower] = useState(1);

  return (
    <div>
      <Upgrade coin={coin} setCoin={setCoin} power={power} setPower={setPower} />
      <Coin coin={coin} setCoin={setCoin} power={power} />
    </div>
  );
}

export default App;
