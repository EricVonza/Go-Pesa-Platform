import React from 'react';
import logo from '../assets/images/logos/Go_Pesa_Logo_1.png'; // Adjust the path if needed

const NavBar = () => {
  return (
    <nav className="bg-purple-700 p-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" /> {/* Adjust size as needed */}
          <span className="text-white text-lg font-bold">GoPesa</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 flex items-center">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/contact" className="text-white">Contact</a>
          <div className="ml-4 space-x-2">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-full">Login</button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
