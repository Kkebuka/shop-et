import React from "react";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <div className=" flex flex-col lg:flex-row">
      <div>
        <div>
          <img src={logo} alt="logo" className=" w-6" />
          <h2>Shop-et</h2>
        </div>
        <div>
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
      <div>
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
