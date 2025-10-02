import React from "react";
import Myself from "./Myself";
import Sister from "./Sister";
import Brother from "./Brother";

const Father = () => {
  return (
    <div className="border p-2  ">
      <h3 className="border p-2 mb-2">Father</h3>
      <div className="flex gap-2">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;
