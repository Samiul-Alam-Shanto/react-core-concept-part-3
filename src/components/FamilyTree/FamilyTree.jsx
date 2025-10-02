import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";

export const AssetContex = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  //jekono kichu ei family tree er jekono jaygay dite hole props drilling kore dite hobe
  //! kintu props drilling na kore context api use korle sohoj hoy code kom likha lage

  const asset = "gold";

  const [money, setMoney] = useState(0);

  return (
    <div>
      <h2 className="font-black text-6xl">Family Tree</h2>
      <h4>Total Family Money : {money}</h4>
      <div className="font-semibold text-2xl">
        <MoneyContext value={[money, setMoney]}>
          <AssetContex.Provider value={asset}>
            <Grandpa></Grandpa>
          </AssetContex.Provider>
        </MoneyContext>
      </div>
    </div>
  );
};

export default FamilyTree;
