import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className=" flex w-full justify-between items-center h-12 py-3 px-5 drop-shadow-md bg-amber-300 ">
      <div className=" flex ">
        <img src={logo} alt="logo" className=" w-6" />
        <h2 className="from-neutral-600">Shop-et</h2>
      </div>
      <div className="  gap-4 hidden  lg:flex  w-[600px] ">
        <a
          href="#"
          className=" hover:bg-button-color px-3 rounded-md font-medium text-lg p-1"
        >
          Men's Wear
        </a>
        <a
          href="#"
          className="hover:bg-button-color  px-3 rounded-md font-medium text-lg p-1"
        >
          Kid's Wear
        </a>
        <a
          href="#"
          className="hover:bg-button-color px-3 rounded-md font-medium text-lg p-1"
        >
          Women bags
        </a>
        <a
          href="#"
          className="hover:bg-button-color  px-3 rounded-md font-medium text-lg p-1"
        >
          Unisex wears
        </a>
        {/* <input type="text" className=" w-48 h-6 rounded-md px-3" /> */}
      </div>
    </div>
  );
}

export default Navbar;
