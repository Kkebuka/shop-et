import React from "react";
import TopGridView from "./TopGridView";

function TopProduct() {
  return (
    <div className="flex flex-col items-center py-12 ">
      <h2 className="text-md text-orange-500">Top Selling Products for you</h2>
      <strong className="text-4xl">Products</strong>
      <p className="text-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est amet
        ducimus non!
      </p>
      <TopGridView />
      <button className="mt-12 p-4">View All Products</button>
    </div>
  );
}

export default TopProduct;
