import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef(null); // Wrap both toggle and nav

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="py-3 rounded-full fixed w-[97%] top-[15px] z-[99] bg-white max-w-[1400px] m-auto right-0 left-0">
        <div className="px-10 flex items-center justify-between relative mx-auto">
          {/* Logo */}
          <div className="logo max-w-[225px]">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 text-default"
            >
              Husnain
            </Link>
          </div>

          {/* Hamburger + Nav Wrapper */}
          <div ref={menuWrapperRef} className="relative">
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
                fixed top-[71px] right-0 h-full max-w-[400px] w-full py-6
                transform duration-300 ease-in-out z-50
                lg:static lg:transform-none lg:flex lg:flex-row bg-default lg:p-0 flex-col lg:max-w-fit lg:bg-white md:space-x-6 transition-all
                ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0
              `}
            >
              <ul className="flex flex-col lg:flex-row xl:gap-14 lg:gap-8 w-full text-left lg:w-auto">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={handleCloseMenu}
                      className="block py-4 px-6 lg:p-0 text-[20px] lg:text-[16px] font-medium text-white lg:text-primary hover:text-default hover:bg-white transition-all duration-500 ease-in-out"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to=""
                onClick={handleCloseMenu}
                className="!ml-0 lg:hidden flex text-[20px] xl:text-[18px] lg:text-[15px] font-medium text-white  lg:bg-default  lg:px-8 lg:py-3 py-4 px-6 hover:text-default hover:bg-white transition-all duration-300 ease-in-out"
              >
                DOWNLOAD CV
              </Link>
            </nav>
          </div>

          {/* CV Button for desktop */}
          <div className="hidden lg:flex ml-4">
            <Link
              to=""
              className="text-[16px] xl:text-[18px] font-medium text-white bg-default rounded-[42px] px-8 py-3 transition-all duration-500 ease-in-out"
            >
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
