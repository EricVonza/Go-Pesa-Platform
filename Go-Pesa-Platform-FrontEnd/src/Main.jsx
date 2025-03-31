import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Router>
    <App />
    </Router>

  </StrictMode>
);

export default main;