import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div className="border p-2">
      <h3>Uncle</h3>
      <div className="flex">
        <Cousin name="toto"></Cousin>
        <Cousin name="popo"></Cousin>
      </div>
    </div>
  );
};

export default Uncle;
