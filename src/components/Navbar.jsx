import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { use } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />

        <ul className="items-center hidden gap-3 text-white md:flex">
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#Header">Home</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#About">About</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#Projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>
        <button className="hidden px-8 py-2 bg-white rounded-full md:block">
          Signup
        </button>
        <img
          src={assets.menu_icon}
          alt=""
          className=" md:hidden w-7"
          onClick={() => setMenuOpen(true)}
        />
        {/* ------- Mobile Menu -----  */}
        {menuOpen && (
          <div className="fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-all bg-white md:hidden">
            <img
              src={assets.cross_icon}
              alt=""
              className="fixed w-6 top-5 right-5"
              onClick={() => setMenuOpen(false)}
            />
            <ul className="flex flex-col items-center gap-2 px-5 mt-20 text-lg font-medium">
              <a
                onClick={() => setMenuOpen(false)}
                href="#Header"
                className="inline-block px-4 py-2 rounded-full"
              >
                Home
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#About"
                className="inline-block px-4 py-2 rounded-full"
              >
                About
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#Projects"
                className="inline-block px-4 py-2 rounded-full"
              >
                Projects
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#Testimonials"
                className="inline-block px-4 py-2 rounded-full"
              >
                Testimonials
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
