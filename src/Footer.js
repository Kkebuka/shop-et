import React from "react";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <div className=" container mx-auto flex flex-col pl-5 pt-12 gap-0 lg:flex-row lg:gap-16 h-[400px] ">
      <div className=" w-[100%] lg:w-[40%] ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className=" w-12" />
          <h2>Shop-et</h2>
        </div>
        <div className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est magni
          sunt ipsum, aliquid ratione minima fugit quaerat!
        </div>
      </div>
      <div>
        <strong>Important Links</strong>
        <a href="#">
          <p>Home</p>
        </a>
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <p>Contact</p>
        </a>
        <a href="#">
          <p>Blog</p>
        </a>
      </div>
      <div>
        <strong>Important Links</strong>
        <a href="#">
          <p>Home</p>
        </a>
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <p>Contact</p>
        </a>
        <a href="#">
          <p>Blog</p>
        </a>
      </div>
      <div className="lg:pl-12">
        {/* Social media icons */}
        <div>
          <p>Lagos, Nigeria</p>
        </div>
        <div>
          <p>+2348144858370</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
