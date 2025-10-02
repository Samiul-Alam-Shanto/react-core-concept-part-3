import React, { use, useContext } from "react";
import { AssetContex, MoneyContext } from "./FamilyTree";

const Wife = () => {
  const value = useContext(AssetContex);
  const [money, setMoney] = use(MoneyContext);
  return (
    <div className="border p-2">
      <h3>Wife</h3>
      <p>Asset : {value}</p>
      <button>Family got: {money}</button>
      <button onClick={() => setMoney(money + 5000)}>add 5000</button>
    </div>
  );
};

export default Wife;
