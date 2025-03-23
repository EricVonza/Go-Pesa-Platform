import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MotivationalSection from "./pages/Motivational_Section";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
    <BrowserRouter>  
    <NavBar />


    <Routes>
      
      <Route path="/" element={<Home />}/>

      <Route path="/signup" element={<SignUp />}/>


    </Routes>

    <Footer />

    </BrowserRouter>
    </div>
    
    
  );
};

export default App;
