import React from "react";
import BestGridView from "./BestGridView";

function BestProducts() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <strong>Best Products</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          molestiae illo nihil!
        </p>
      </div>

      <BestGridView />
    </div>
  );
}

export default BestProducts;
