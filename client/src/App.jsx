import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MotivationalSection from "./pages/Motivational_Section";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Home/>
      <Footer />

    </BrowserRouter>
  );
};

export default App;
