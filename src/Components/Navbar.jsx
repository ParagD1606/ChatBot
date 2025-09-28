import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = ({ navigate }) => { // Accept the navigate prop
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [light, setLight] = useState(false)

  const mode = () => {
    setLight(prev => !prev)
  }

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-screen bg-[#1C3F6B] text-white shadow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <p className="font-bold text-2xl">SAHAYAK</p>

          <ul className="hidden md:flex gap-10 items-center">
            <li>
              <Link to="/" className="hover:underline cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/chat" onClick={() => setIsOpen(false)} className="hover:underline">
                Chat Bot
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline cursor-pointer">
                About
              </Link>
            </li>
            
            <li>
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-[#F2A84F] text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition"
              >
                Sign in
              </button>
            </li>
          </ul>

          <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} navigate={navigate} /> {/* Pass navigate prop to Login */}

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#778DA9] overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-white text-[#778DA9] px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition w-full"
              >
                Sign in
              </button>
            </li>
          </ul>
          <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} navigate={navigate} /> {/* Pass navigate prop to Login */}
        </div>
      </nav>

      {/* Spacer so page content doesn't go under the fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;