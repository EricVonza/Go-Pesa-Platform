import React, { useState } from "react";
import { Link } from "react-router-dom"; // Correct import
import logo from "../assets/images/logos/Go_Pesa_Logo_1.png"; // Adjust path if needed
import App from "../App";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 p-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" /> {/* Adjust size as needed */}
          <span className="text-white text-lg font-bold">GoPesa</span>
        </div>

        {/* Hamburger Menu */}
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex items-center ${isOpen ? "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4" : "hidden md:flex md:space-x-4"}`}> 
          <Link to="/" className="text-white">Home</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <div className="ml-4 flex space-x-2">
            <Link to="/login">
              <button className="bg-white text-purple-700 px-4 py-2 rounded-full">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
