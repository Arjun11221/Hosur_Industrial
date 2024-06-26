import React from "react";
import { PRODUCTS } from "../utils/productDesc";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Link to="/products" >
    <div className="flex mt-20 ml-7 sm:ml-32 flex-wrap">
      {PRODUCTS.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg  rounded-lg overflow-hidden m-4 w-72"
        >
          <img src={product.image} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-gray-800 font-medium text-md">
              {product.title}
            </h2>

            <Link to="/contact" ><button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Make Inquiry
            </button></Link>
          </div>
        </div>
      ))}
    </div>
    </Link>
  );
};

export default Products;
