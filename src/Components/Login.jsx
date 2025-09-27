import React, { useState, useEffect } from "react";

const Login = ({ isOpen, onClose, navigate }) => { // Accept the navigate prop
  const [show, setShow] = useState(false);
  const [role, setRole] = useState("student"); // student or admin

  useEffect(() => {
    if (isOpen) setShow(true);
    else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onClose(); // Close the modal on submission

    // --- Navigate based on role ---
    if (role === "student") {
      navigate('/chat');
    } else if (role === "admin") {
      navigate('/admin');
    }
    // -----------------------------
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "bg-black/50 opacity-100 backdrop-blur-sm" : "bg-black/0 opacity-0"
      }`}
    >
      <div
        className={`w-80 rounded-3xl border border-cyan-400 bg-slate-600 p-6 shadow-xl transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Role Toggle */}
        <div className="mb-4 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`px-4 py-1 rounded-full font-semibold ${
              role === "student" ? "bg-cyan-500 text-white" : "bg-slate-700 text-gray-300"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`px-4 py-1 rounded-full font-semibold ${
              role === "admin" ? "bg-cyan-500 text-white" : "bg-slate-700 text-gray-300"
            }`}
          >
            Admin
          </button>
        </div>

        <h1 className="mb-8 text-center text-3xl font-bold text-white">{role === "student" ? "Student Login" : "Admin Login"}</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-full bg-white px-4 py-2 text-black outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-full bg-white px-4 py-2 text-black outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-cyan-500 px-6 py-2 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-cyan-600 active:opacity-80"
          >
            Login
          </button>

          <p className="text-center text-gray-200">
            New user?{" "}
            <span className="cursor-pointer text-cyan-300 hover:underline">Register</span>
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-2 text-sm text-cyan-300 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;