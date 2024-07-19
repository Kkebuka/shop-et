import React from "react";
import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="lg:h-[600px]  border-solid relative -z-10   mx-auto flex items-center bg-background-gray">
      <div className="h-[500px] w-[500px] border-solid bg-amber-300 rounded-3xl absolute -top-36 right-36 rotate-45 -z-10  "></div>
      <Carousel />
    </div>
  );
}

export default Banner;
