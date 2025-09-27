import React from "react";
import { Home, User, Settings, LogOut } from "lucide-react";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1B263B] text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex-1 space-y-4">
          <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-cyan-600 transition">
            <Home size={20} /> Dashboard
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-cyan-600 transition">
            <User size={20} /> Users
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-cyan-600 transition">
            <Settings size={20} /> Settings
          </button>
        </nav>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 mt-auto p-2 rounded hover:bg-red-600 transition"
        >
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
        <p className="text-gray-700">This is where you can manage your application data.</p>
      </main>
    </div>
  );
};

export default AdminDashboard;
