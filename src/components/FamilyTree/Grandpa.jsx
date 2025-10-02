import React from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = () => {
  return (
    <div className="border p-2">
      <h3 className="font-black text-4xl">Grand Father</h3>
      <div className="flex gap-2">
        <Father></Father>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </div>
    </div>
  );
};

export default Grandpa;
