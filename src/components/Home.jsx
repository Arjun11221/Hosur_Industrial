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
    <div className="flex flex-col min-h-screen">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          className="fixed bottom-5 right-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full z-50"
          src={imagelogo}
          alt="WhatsApp Logo"
        />
      </a>
      <Navbar />
      <Body className="flex-grow" />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
