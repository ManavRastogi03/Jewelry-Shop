import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="flex justify-center items-center p-4 bg-primary shadow-md">
      <div className="flex items-center space-x-4">
        {/* Glowing Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50"
        />
        {/* Shop Name with Typewriter Animation */}
        <h1 className="text-xl font-bold text-white">
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-typewriter">
          शिव अजय ज्वैलर्स
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
