import React from "react";
import orange from "../assets/website/orange-pattern.jpg";

function Notify() {
  return (
    <div
      className=" flex flex-col items-center border-2 h-[200px] justify-center   bg-cover bg-center"
      style={{ backgroundImage: `url(${orange})` }}
    >
      <strong className="text-2xl mb-4">Get Notified About New Products</strong>
      <input
        type="email"
        className="border w-[90%] px-4 h-10 lg-[400px] text-lg lg:w-[500px] focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        placeholder="Enter your email"
      />
    </div>
  );
}

export default Notify;
