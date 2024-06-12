import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Products from "./Products";
import Footer from "./Footer";
import imagelogo from "../assets/what'sapplogo.jpg";

const Home = () => {
  const phoneNumber = '+919751860675'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  return (
    <div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          className="fixed bottom-5 right-2 w-20 rounded-full h-20 z-50"
          src={imagelogo}
          alt="Logo"
        />
      </a>
      <Navbar />
      <Body />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
