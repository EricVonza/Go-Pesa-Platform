import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MotivationalSection from "./pages/Motivational_Section";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      <Footer />
    </div>
  );
};

export default App;
