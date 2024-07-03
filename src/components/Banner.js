import React from "react";
import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="lg:h-[600px] container border-solid border-2 mx-auto border-black flex items-center">
      <div className="h-[500px] w-[500px] border-solid bg-amber-300 rounded-3xl absolute -top-36 right-36 rotate-45 -z-10 "></div>
      <Carousel />
    </div>
  );
}

export default Banner;
