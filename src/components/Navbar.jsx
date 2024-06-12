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
              className="w-16 h-16 rounded-md ml-10"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex space-x-8 items-center">
          <Link
            to="/"
            className="text-white font-semibold text-base hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-semibold text-base hover:text-gray-300 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white font-semibold text-base hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white font-semibold text-base hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
          <div className="flex font-semibold text-base items-center text-white hover:text-gray-300 transition duration-300 ease-in-out">
            <MdEmail className="mr-2" />
            ceo@hosurgases.com
          </div>
          <div className="flex font-semibold text-base items-center text-white hover:text-gray-300 transition duration-300 ease-in-out">
            <MdPhone className="mr-2" />
            +919751860675
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
