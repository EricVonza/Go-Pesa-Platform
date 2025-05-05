import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MotivationalSection from "./pages/Motivational_Section";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userName")); // Track login state

  useEffect(() => {
    // Listen for changes in localStorage to update login state
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("userName"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <NavBar />

      <Routes>
        {/* Redirect to LandingPage if not logged in */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/landing" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/motivational" element={<MotivationalSection />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
