import React from "react";
import shirt from "../assets/shirt/shirt.png";
import shirt2 from "../assets/shirt/shirt3.png";
import shirt1 from "../assets/shirt/shirt2.png";
import Rating from "@mui/material/Rating";

function BestGridView() {
  const bestImages = [
    {
      id: 0,
      rating: 5,
      title: "Casual Shirt",
      image: shirt,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
    {
      id: 1,
      rating: 4,
      title: "Printed Shirt",
      image: shirt1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
    {
      id: 2,
      rating: 4,
      title: "Women Shirt",
      image: shirt2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
  ];
  return (
    <div className="py-6">
      <div className=" h-auto flex flex-col  justify-evenly items-center lg:flex-row  ">
        {bestImages.map((bestImage) => (
          <div key={bestImage.id} className="flex flex-col w-[200px]">
            {/* Space for rating star */}

            <img src={bestImage.image} alt="" className="" />
            <div className="flex justify-center">
              <Rating name="read-only" value={bestImage.rating} readOnly />
            </div>

            <strong className="text-center">{bestImage.title}</strong>
            <p className="text-center">{bestImage.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-32 h-10 mx-auto bg-button-color rounded-md">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default BestGridView;
