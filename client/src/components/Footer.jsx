import React from 'react';
    
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-gray-800 text-white text-center p-4">
            {currentYear} All Rights Reserved, GoPesa
        </div>
    );
};

export default Footer;
