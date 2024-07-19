import React from "react";
import logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerImg from "../assets/website/footer-pattern.jpg";

function Footer() {
  return (
    <div
      className=" flex flex-wrap gap-x-16 pl-5 pt-12  lg:flex-row lg:gap-16 h-[800px] lg:h-[400px]  w-full  bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className=" w-[100%] lg:w-[40%] ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className=" w-12" />
          <h2>Shop-et</h2>
        </div>
        <div className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est magni
          sunt ipsum, aliquid ratione minima fugit quaerat! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Perferendis, ipsum?
        </div>
      </div>
      <div className="h-[200px]">
        <strong className="">Important Links</strong>
        <a href="#">
          <p className="my-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            Home
          </p>
        </a>
        <a href="#">
          <p className="mb-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            About
          </p>
        </a>
        <a href="#">
          <p className="mb-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            Contact
          </p>
        </a>
        <a href="#">
          <p className="mb-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            Blog
          </p>
        </a>
      </div>
      <div className="h-[200px]">
        <strong>Other Links</strong>
        <a href="#">
          <p className="my-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            Home
          </p>
        </a>
        <a href="#">
          <p className="mb-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            About
          </p>
        </a>
        <a href="#">
          <p className="mb-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            Contact
          </p>
        </a>
        <a href="#">
          <p className="mb-3 hover:text-orange-500 hover:ml-2 ease-in-out duration-300">
            Blog
          </p>
        </a>
      </div>
      <div className=" h-[200px] lg:pl-12">
        {/* Social media icons */}
        <FacebookIcon className="ml-2" />
        <InstagramIcon className="ml-2" />
        <LinkedInIcon className="ml-2" />
        <div>
          <p className="my-3">Lagos, Nigeria</p>
        </div>
        <div>
          <p className="mb-3">+2348144858370</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
