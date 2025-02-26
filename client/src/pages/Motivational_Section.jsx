import React from 'react';
import winningSlot from '../assets/images/cards/wining_slot.png'; 



const Motivational_Section = () => {
  return (
    <div className="min-h-screen bg-purple-500 text-white flex flex-col items-center justify-center pt-20">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mt-4">Welcome to ssssssssGoPesa!</h1>

      {/* Winning Slot Image */}
      <img src={winningSlot} alt="Winning Slot" className="mt-6 w-64 h-auto rounded-lg shadow-lg" />

    </div>
  );
};

export default Motivational_Section;
