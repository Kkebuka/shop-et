import React from "react";
import BestGridView from "./BestGridView";

function BestProducts() {
  return (
    <div>
      <div className="flex flex-col items-center pt-6 border-t-gray-200 border-t-2">
        <strong className="text-3xl">Best Products</strong>
        <p className="font-Poppin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          molestiae illo nihil!
        </p>
      </div>

      <BestGridView />
    </div>
  );
}

export default BestProducts;
