import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import winningSlot from '../assets/images/cards/wining_slot.png';

const Home = () => {
  const [userName, setUserName] = useState('Guest'); // Default to 'Guest'

  useEffect(() => {
    // Fetch the user's name from the database
    const token = localStorage.getItem('token'); // Assume token is stored in localStorage
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/users', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log('API Response:', response.data); // Log the response to debug
          if (response.data && response.data.name) {
            setUserName(response.data.name); // Update the user's name
          } else {
            console.error('Name field missing in API response');
            setUserName('Guest'); // Fallback to default
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.response || error.message);
          setUserName('Guest'); // Fallback to default if there's an error
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-500 text-white flex flex-col items-center justify-center pt-20 pb-20">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mt-4">Welcome to GoPesa!</h1>

      {/* Personalized Greeting */}
      <h2 className="text-xl font-semibold mt-2">Hi {userName}!</h2>

      {/* Winning Slot Image */}
      <img src={winningSlot} alt="Winning Slot" className="mt-6 w-64 h-auto rounded-lg shadow-lg" />

      {/* Services Section */}
      <div className="mt-10 w-full max-w-4xl bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-center mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hourly Investment */}
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Hourly Mining Rig</h4>
            <p className="text-gray-600">Invest in mining rigs on an hourly basis and earn quick returns.</p>
            <p className="text-green-500 font-bold mt-2">Rate: $5/hour</p>
          </div>

          {/* Daily Investment */}
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Daily Mining Rig</h4>
            <p className="text-gray-600">Perfect for short-term investments with daily payouts.</p>
            <p className="text-green-500 font-bold mt-2">Rate: $100/day</p>
          </div>

          {/* Weekly Investment */}
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Weekly Mining Rig</h4>
            <p className="text-gray-600">Enjoy consistent weekly returns with our mining rigs.</p>
            <p className="text-green-500 font-bold mt-2">Rate: $600/week</p>
          </div>

          {/* Monthly Investment */}
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Monthly Mining Rig</h4>
            <p className="text-gray-600">Maximize your profits with our monthly investment plans.</p>
            <p className="text-green-500 font-bold mt-2">Rate: $2,000/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
