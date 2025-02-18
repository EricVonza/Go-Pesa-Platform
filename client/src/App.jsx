import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Motivational_Section from './pages/Motivational_Section';
import NavBar from './components/NavBar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Home />
    <Motivational_Section />
  </StrictMode>
);

export default App;  // Ensure this line is present!