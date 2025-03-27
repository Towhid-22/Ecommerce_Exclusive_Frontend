import React from "react";
import Chair from "../assets/Sales_images/chair.png";
import Monitor from "../assets/Sales_images/Monitor.png";

const Sales = () => {
  return (
    <div className="flex gap-3">
      <img src={Chair} alt="Chair" className="bg-gray-200 p-6" />
      <img src={Monitor} alt="Chair" className="bg-gray-200 p-6" />
    </div>
  );
};

export default Sales;
