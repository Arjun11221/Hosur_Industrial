import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { MdEmail, MdPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-16 h-16 rounded-md ml-4 sm:ml-10"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
          <div className="ml-8 sm:ml-12 flex items-center space-x-4 sm:space-x-8">
            <Link
              to="/"
              className="text-white font-semibold text-sm sm:text-base hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white font-semibold text-sm sm:text-base hover:text-gray-300 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white font-semibold text-sm sm:text-base hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white font-semibold text-sm sm:text-base hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-8">
          <div className="flex items-center text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 sm:py-0">
            <MdEmail className="mr-2" />
            <span className="text-sm sm:text-base">ceo@hosurgases.com</span>
          </div>
          <div className="flex items-center text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 sm:py-0">
            <MdPhone className="mr-2" />
            <span className="text-sm sm:text-base">+919751860675</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:hidden items-center space-x-4 sm:space-x-8 mt-4">
        <div className="flex items-center text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 sm:py-0">
          <MdEmail className="mr-2" />
          <span className="text-sm sm:text-base">ceo@hosurgases.com</span>
        </div>
        <div className="flex items-center text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 sm:py-0">
          <MdPhone className="mr-2" />
          <span className="text-sm sm:text-base">+919751860675</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
