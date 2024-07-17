import React from "react";
import woman from "../assets/hero/shopping.png";

function WinterSale() {
  const qualities = [
    { key: 0, icon: "fa-solid fa-unlock", text: "Quality Products" },
    { key: 1, icon: "fa-solid fa-bowl-food", text: "Fast Delivery" },
    { key: 2, icon: "fa-regular fa-credit-card", text: "Easy Payment Method" },
    { key: 3, icon: "fa-solid fa-atom", text: "Get Offers" },
  ];
  return (
    <div className="  container mx-auto flex flex-col items-center justify-evenly lg:flex-row mb-4">
      <img src={woman} alt="woman with bags" className="w-[500px] " />
      <div className="px-4 py-6 flex flex-col gap-3 lg:w-[700px]">
        <strong className="text-2xl text-center lg:text-4xl ">
          Winter Sale upto 50% Off
        </strong>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse
          veniam velit quasi quidem deserunt ipsum dolor sit amet consectetur!
        </p>
        {qualities.map((quality) => (
          <div key={quality.key}>
            <i class={quality.icon}></i>
            {/* icon here */}
            <h2 className="text-">{quality.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WinterSale;
