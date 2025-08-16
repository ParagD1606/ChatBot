import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [light, setLight] = useState(false)

  // const mode = ()=>{
  //   setLight(prev => prev ? ☀:)
  // }

  return (
    <nav className="sticky top-0 z-50 w-screen bg-[#778DA9] text-white shadow">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <p className="font-bold text-2xl">Eatly</p>

        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:underline cursor-pointer">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <button>☀</button>
          </li>
          <li>
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-white text-[#778DA9] px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Sign in
            </button>
          </li>
        </ul>

        <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
          </button>
        </div>
      </div>

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
        <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
