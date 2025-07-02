import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className=" py-3 rounded-full fixed w-full top-[15px] z-[99] bg-white max-w-[1460px] m-auto right-0 left-0 ">
        <div className=" px-10 flex items-center justify-between relative mx-auto">
          {/* Logo */}
          <div className="logo max-w-[225px]">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 text-default"
            >
              {" "}
              Husnain{" "}
            </Link>
            {/* <img src={Logo} alt="Profile" className="w-full h-auto" /> */}
          </div>

          {/* Hamburger */}
          <div
            className="flex items-end flex-col lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-7 h-1 bg-default mb-1"></div>
            <div className="w-9 h-1 bg-default mb-1"></div>
            <div className="w-7 h-1 bg-default"></div>
          </div>

          {/* Nav Menu */}
          <nav
            id="navMenu"
            className={`
              fixed top-[71px] right-0 h-full max-w-[400px] w-full  p-6
              transform  duration-300 ease-in-out z-50
              lg:static lg:transform-none lg:flex lg:flex-row bg-default lg:p-0 flex-col lg:max-w-fit  lg:bg-white md:space-x-6 transition-all
              ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              } lg:translate-x-0
            `}
          >
            <ul className="flex flex-col gap-4 lg:flex-row lg:gap-14 p-6 lg:p-0 w-full  text-left lg:w-auto  ">
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Testimonials",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="block py-2 text-[20px] lg:text-[16px] font-medium text-white lg:text-primary lg:hover:text-default"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CV Button */}
          <div className="hidden lg:flex ml-4">
            <Link
              to=""
              className="text-[16px] xl:text-[18px] font-medium text-white  bg-default rounded-[42px] px-8 py-3"
            >
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
