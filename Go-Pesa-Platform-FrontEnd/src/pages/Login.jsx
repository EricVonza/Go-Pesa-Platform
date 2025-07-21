import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Loading spinner component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('https://go-pesa-platform-backend.onrender.com:5001/api/auth/login', { email, password });

      console.log('API Response:', response.data);
      const userName = response.data?.user?.name || 'User';
      localStorage.setItem('userName', userName);

      alert('Login successful!');

      // Simulate small delay so the loading spinner is noticeable
      setTimeout(() => {
        navigate('/');
      }, 1000);

    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || 'Login failed';
      alert(errorMessage);
      setLoading(false); // Stop loading on error
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
          disabled={loading} // Disable button while loading
          className={`w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {loading && <LoadingSpinner />} {/* Show spinner when loading */}

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
