import React from 'react';
import backimage2 from "../assets/backgoundimage2.jpg";

const Body = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img src={backimage2} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">HOSUR INDUSTRIAL GASES
          </h1>
          <p className="text-xl font-semibold mb-8">One man's scrap is another man's goldmine.</p>
          <button className="px-4 py-2 font-medium bg-blue-600 hover:bg-blue-700 rounded">Make Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
