import React from 'react';
import backimage2 from "../assets/backgoundimage2.jpg";
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img src={backimage2} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">HOSUR INDUSTRIAL GASES</h1>
          <p className="text-lg sm:text-xl font-semibold mb-8">One man's scrap is another man's goldmine.</p>
          <Link to="/contact" ><button className="px-4 py-2 font-medium bg-blue-600 hover:bg-blue-700 rounded">Make Inquiry</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
