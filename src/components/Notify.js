import React from "react";

function Notify() {
  return (
    <div className=" flex flex-col items-center border-2 h-[200px] justify-center">
      <strong className="text-2xl mb-4">Get Notified About New Products</strong>
      <input
        type="email"
        className="w-[90%] px-4 h-10 lg-[400px] text-lg"
        placeholder="Enter your email"
      />
    </div>
  );
}

export default Notify;
