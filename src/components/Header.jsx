import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../footer logo.png'; 
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className=" py-8 fixed w-full top-0 ">
        <div className="max-w-[1460px] px-10 flex items-center justify-between relative mx-auto">
          {/* Logo */}
          <div className="logo max-w-[225px]">
            <Link to="/" className="text-2xl font-bold text-blue-600">  <img src={Logo} alt="Profile" className="w-full h-auto" /></Link>
          </div>

          {/* Hamburger */}
          <div className="flex items-end flex-col lg:hidden cursor-pointer" onClick={toggleMenu}>
            <div className="w-7 h-1 bg-secondry mb-1"></div>
            <div className="w-9 h-1 bg-secondry mb-1"></div>
            <div className="w-7 h-1 bg-secondry"></div>
          </div>

          {/* Nav Menu */}
          <nav
            id="navMenu"
            className={`
              fixed top-14 right-0 h-full max-w-[400px] w-full bg-secondry p-6
              transform  duration-300 ease-in-out z-50
              lg:static lg:transform-none lg:flex lg:flex-row lg:bg-transparent lg:p-0
             flex-col lg:max-w-fit  lg:bg-transparent  md:space-x-6 transition-all
              ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0
            `}
          >
            <ul className="flex flex-col gap-4 lg:flex-row lg:gap-14 p-6 w-full  text-left lg:w-auto  lg:bg-white">
              {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="block py-2 text-[20px] lg:text-[16px] font-normal text-white lg:text-primary lg:hover:text-secondry"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CV Button */}
          <div className="hidden lg:flex ml-4">
            <Link to="" className="text-[16px] xl:text-[18px] font-medium text-white  bg-[#754EF9] rounded-[42px] px-8 py-3">
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
