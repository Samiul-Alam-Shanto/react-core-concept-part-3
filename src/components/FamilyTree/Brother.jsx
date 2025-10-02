import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [taka, setTaka] = use(MoneyContext);
  return (
    <div className="border p-2">
      <h3>Brother</h3>
      <button onClick={() => setTaka(taka + 1000)}>add 1000</button>
    </div>
  );
};

export default Brother;
