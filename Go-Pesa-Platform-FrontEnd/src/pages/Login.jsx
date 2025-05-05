import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Log the response to inspect its structure
      console.log('API Response:', response.data);

      // Dynamically handle the response structure
      const userName = response.data?.user?.name || 'User'; // Default to 'User' if name is missing

      // Store the user's name in localStorage
      localStorage.setItem('userName', userName);

      // Show success message
      alert('Login successful!');

      // Redirect to Home.jsx
      navigate('/'); // Ensure this redirects to the Home page
    } catch (error) {
      // Handle errors properly
      const errorMessage = error.response?.data?.error || error.message || 'Login failed';
      alert(errorMessage);
    }
  };

  return (
    <div className="pt-20 flex flex-col items-center justify-center min-h-screen bg-purple-500 bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back to Financial Freedom
        </h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
