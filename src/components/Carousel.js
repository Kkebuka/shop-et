import React from "react";
import sale from "../assets/hero/sale.png";

function Carousel() {
  return (
    <div className="container flex flex-col-reverse mx-auto  h-[80%]  px-[10%] lg:flex-row lg:gap-14 pb-4">
      <div className="flex flex-col lg:w-[45%] h-[100%] pt-16 space-y-8">
        <strong className="text-6xl">Upto 50% off on all Men's Wear</strong>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          eveniet cumque non quo labore vitae.
        </p>
        <button className="w-36 mx-auto py-2 bg-button-color rounded-md animate-bounce direction-normal hover:text-lg">
          See Offers
        </button>
      </div>
      <div className="w-[100%] lg:w-[50%] relative z-10">
        <img src={sale} alt="" className="w-45" />
      </div>
    </div>
  );
}

export default Carousel;
