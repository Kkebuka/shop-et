import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className=" flex w-full justify-between items-center h-12 py-3 px-5  bg-amber-300 ">
      <div className=" flex ">
        <img src={logo} alt="logo" className=" w-6" />
        <h2 className="from-neutral-600">Shop-et</h2>
      </div>
      <div className="  gap-4 hidden  lg:flex  w-[600px] ">
        <a
          href="#"
          className=" hover:bg-amber-200 hover:text-[1.1rem] px-3 rounded-md"
        >
          Men's Wear
        </a>
        <a href="#" className="hover:bg-amber-200  px-3 rounded-md">
          Kid's Wear
        </a>
        <a href="#" className="hover:bg-amber-200 px-3 rounded-md">
          Women bags
        </a>
        <a href="#" className="hover:bg-amber-200  px-3 rounded-md">
          Unisex wears
        </a>
        {/* <input type="text" className=" w-48 h-6 rounded-md px-3" /> */}
      </div>
    </div>
  );
}

export default Navbar;
