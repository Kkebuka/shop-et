import React from "react";
import shirt from "../assets/shirt/shirt.png";
import shirt2 from "../assets/shirt/shirt3.png";
import shirt1 from "../assets/shirt/shirt2.png";

function BestGridView() {
  const bestImages = [
    {
      id: 0,
      rating: "",
      title: "Casual Shirt",
      image: shirt,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
    {
      id: 1,
      rating: "",
      title: "Printed Shirt",
      image: shirt1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
    {
      id: 2,
      rating: "",
      title: "Women Shirt",
      image: shirt2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
  ];
  return (
    <div className="py-6">
      <div className=" h-auto flex flex-col shadow-lg justify-evenly items-center lg:flex-row  ">
        {bestImages.map((bestImage) => (
          <div key={bestImage.id} className="flex flex-col w-[200px]">
            {/* Space for rating star */}
            <img src={bestImage.image} alt="" className="" />
            <strong className="text-center">{bestImage.title}</strong>
            <p className="text-center">{bestImage.text}</p>
          </div>
        ))}
      </div>
      <button>Order Now</button>
    </div>
  );
}

export default BestGridView;
