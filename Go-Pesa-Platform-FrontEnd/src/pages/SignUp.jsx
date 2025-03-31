import React, { useState } from 'react';
import { signup } from '../services/api';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const collectData = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await signup({ name, email, username, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'Error signing up');
    }
  };

  return (
    <div className="pt-20 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          One Step Away From Financial Freedom
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Preferred Username"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your New Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={collectData}
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
