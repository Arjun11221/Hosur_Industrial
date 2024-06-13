import React from 'react';
import Navbar from './Navbar';
import image from "../assets/About.jpg";
import { PRODUCTSDETAIL } from '../utils/productDesc';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const ProductDetail = () => {
  

  return (
    <>
      <Navbar />
      <div className="relative h-72">
      <div className="absolute inset-0">
        <img src={image} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-6xl font-semibold mb-4">Product details</h1>
          <p className="text-xl sm:text-lg font-normal mb-8">Details matter, it's worth waiting to get it right</p>
        </div>
      </div>
    </div>


      {
        PRODUCTSDETAIL.map((product)=>(
          <div className="bg-gray-100 py-10" key={product.id} >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt="Product"
                className="w-96 h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Right Column - Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl  font-bold text-gray-800">{product.title }</h2>
              <p className="text-xl text-gray-600 mt-4">{product.price}</p>
              <p className="text-gray-600 mt-4">{product.description}</p>
              <Link to="/contact" >
              <button
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Make Inquiry
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      <Footer/>
    </>
  );
};

export default ProductDetail;
