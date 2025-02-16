import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-purple-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyBrand
        </div>
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
