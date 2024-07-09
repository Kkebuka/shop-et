import React from "react";
import woman from "../assets/hero/shopping.png";

function WinterSale() {
  const qualities = [
    { key: 0, icon: "", text: "Quality Products" },
    { key: 1, icon: "", text: "Fast Delivery" },
    { key: 2, icon: "", text: "Easy Payment Method" },
    { key: 3, icon: "", text: "Get Offers" },
  ];
  return (
    <div className="  container mx-auto flex flex-col items-center justify-evenly lg:flex-row mb-4">
      <img src={woman} alt="woman with bags" className="w-[500px] " />
      <div className="px-4 py-6 flex flex-col gap-3 lg:w-[700px]">
        <strong>Winter Sale upto 50% Off</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse
          veniam velit quasi quidem deserunt ipsum dolor sit amet consectetur!
        </p>
        {qualities.map((quality) => (
          <div key={quality.key}>
            {/* icon here */}
            <h2>{quality.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WinterSale;
