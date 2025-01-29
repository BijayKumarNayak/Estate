import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/header_img.png";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      className="flex items-center w-full min-h-screen overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container px-4 py-2 mx-auto text-center md:px-10 md:py-4"
      >
        <h2 className="inline-block max-w-3xl text-5xl font-semibold text-white sm:text-6xl md:text-[82px]">
          Explore homes that fit your dreams
        </h2>
        <div className="mt-16 space-x-6 text-white">
          <a href="#Projects" className="px-8 py-3 border border-white rounded">
            Projects
          </a>
          <a href="#Contact" className="px-8 py-3 bg-blue-500 rounded ">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
