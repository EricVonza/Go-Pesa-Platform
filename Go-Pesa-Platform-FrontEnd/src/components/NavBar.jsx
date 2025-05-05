import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logos/Go_Pesa_Logo_1.png";
import Loading from "../components/LoadingComponent/Loading"; // Import Loading component

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const userName = localStorage.getItem("userName");
    setIsLoggedIn(!!userName); // Set to true if userName exists
  }, []);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set to true when scrolled down
      } else {
        setIsScrolled(false); // Set to false when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  const handleNavigation = (path) => {
    setIsLoading(true); // Show loading spinner
    setTimeout(() => {
      setIsLoading(false); // Hide loading spinner after 2 seconds
      navigate(path); // Navigate to the desired route
    }, 2000);
  };

  const handleSignOut = () => {
    // Clear user data from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update login state
    navigate("/landing"); // Redirect to the landing page
  };

  return (
    <nav
      className={`p-4 fixed top-0 w-full z-50 shadow-lg transition-colors duration-300 ${
        isScrolled ? "bg-gray-800/80" : "bg-gray-800"
      }`}
    >
      {isLoading && <Loading />} {/* Show Loading component when isLoading is true */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" />
          <span className="text-white text-lg font-bold">GoPesa</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Sidebar for Mobile View */}
        <div
          className={`fixed top-0 left-0 h-full w-40 bg-gray-800 bg-opacity-60 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="mt-32 space-y-5 px-4">
            <li>
              <button
                className="block text-white hover:text-gray-400"
                onClick={() => {
                  setIsOpen(false);
                  handleNavigation("/");
                }}
              >
                Home
              </button>
            </li>
            {!isLoggedIn ? (
              <>
                <li>
                  <button
                    className="block text-white hover:text-gray-400"
                    onClick={() => {
                      setIsOpen(false);
                      handleNavigation("/login");
                    }}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="block text-white hover:text-gray-400"
                    onClick={() => {
                      setIsOpen(false);
                      handleNavigation("/signup");
                    }}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="block text-white hover:text-gray-400"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-white hover:text-gray-400">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:text-gray-400">
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleSignOut}
              className="text-white hover:text-gray-400"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;