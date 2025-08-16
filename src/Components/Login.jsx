import React, { useEffect, useState } from 'react';

const Login = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true); // trigger animation
    } else {
      // delay hiding for smooth fade out
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300
        ${isOpen ? 'bg-black bg-opacity-50 opacity-100' : 'bg-black bg-opacity-0 opacity-0'}`}
    >
      <div
        className={`w-72 bg-slate-500 border-2 border-cyan-400 rounded-3xl p-6 transform transition-all duration-300
          ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      >
        <h1 className="text-center text-white font-semibold text-3xl mb-14">
          Login
        </h1>
        <form className="flex flex-col gap-6 items-center">
          <input
            type="email"
            placeholder="Email"
            className="w-[90%] px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[90%] px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-white"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 active:opacity-70 text-white px-6 py-2 rounded-full transition-all duration-300"
          >
            Submit
          </button>
          <p className="text-gray-200 cursor-pointer hover:text-white transition duration-300">
            New user ?
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-cyan-400 underline mt-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
