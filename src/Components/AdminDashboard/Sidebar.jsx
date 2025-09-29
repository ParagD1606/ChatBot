import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LineChart, FileText, Settings, LogOut } from 'lucide-react';
import ProfilePic from '../../assets/ProfilePic.jpeg';

const Sidebar = ({ activeView, setActiveView, onLogout }) => {
  return (
    <aside className="w-64 bg-[#1C3F6B] text-white flex flex-col p-6 fixed min-h-screen">
      <div className="flex items-center gap-2 mb-8">
        <Bot className="w-6 h-6" />
        <h2 className="text-2xl font-bold">SAHAYAK</h2>
      </div>
      <nav className="flex-1 space-y-4">
        <div className="text-sm font-semibold text-gray-400 mb-2">NAVIGATION</div>
        <button
          onClick={() => setActiveView("analytics")}
          className={`flex items-center gap-2 w-full p-2 rounded transition ${activeView === 'analytics' ? 'bg-[#F2A84F]' : 'hover:bg-[#F2A84F]'}`}
        >
          <LineChart size={20} /> Analytics
        </button>
        <button
          onClick={() => setActiveView("faq")}
          className={`flex items-center gap-2 w-full p-2 rounded transition ${activeView === 'faq' ? 'bg-[#F2A84F]' : 'hover:bg-[#F2A84F]'}`}
        >
          <FileText size={20} /> FAQ Management
        </button>
        <button
          onClick={() => setActiveView("settings")}
          className={`flex items-center gap-2 w-full p-2 rounded transition ${activeView === 'settings' ? 'bg-[#F2A84F]' : 'hover:bg-[#F2A84F]'}`}
        >
          <Settings size={20} /> Settings
        </button>
      </nav>
      <div className="mt-8">
        <div className="text-sm font-semibold text-gray-400 mb-2">QUICK ACCESS</div>
        <div className="bg-white/20 p-4 rounded-lg text-sm">
          <p>Active Chats: <span className="font-bold">1</span></p>
          <p>Today's Users: <span className="font-bold">3</span></p>
          <p className="mt-2 text-green-400">Available: 24/7</p>
          <p className="text-xs">6 Languages</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2 py-4 mt-auto">
        <img src={ProfilePic} alt="Admin" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-semibold">College Staff</span>
      </div>
      <Link to="/" className="flex items-center gap-2 px-2 py-2 rounded hover:bg-white/20 transition">
        <LogOut size={20} /> Back to Site
      </Link>
    </aside>
  );
};

export default Sidebar;