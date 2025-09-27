import React, { useState } from "react";
import { Moon, Sun, Info, RefreshCcw } from 'lucide-react';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    // In a real application, you would update the theme in localStorage
    // and apply it to the document body.
    document.documentElement.classList.toggle('dark');
  };

  const handleReset = () => {
    alert("System settings have been reset to defaults. (This is a placeholder action)");
    // Logic to reset settings would go here.
  };

  const systemInfo = {
    version: "1.0.2",
    lastUpdated: "2025-09-27",
    status: "Operational",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      <p className="text-gray-700">Configure and manage system-wide settings for the SAHAYAK application.</p>

      {/* General Settings Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-lg font-bold text-gray-700">General</h3>
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-500" />}
            <span className="text-gray-700">Theme</span>
          </div>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* System Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-lg font-bold text-gray-700">System Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md">
            <Info size={20} className="text-blue-500" />
            <span className="text-gray-700 font-medium">Version: {systemInfo.version}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md">
            <Info size={20} className="text-blue-500" />
            <span className="text-gray-700 font-medium">Last Updated: {systemInfo.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md">
            <Info size={20} className="text-blue-500" />
            <span className="text-gray-700 font-medium">Status: {systemInfo.status}</span>
          </div>
        </div>
      </div>

      {/* Advanced Settings Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Advanced</h3>
        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold text-white bg-red-600 hover:bg-red-700 transition"
        >
          <RefreshCcw size={20} />
          Reset to Defaults
        </button>
      </div>

    </div>
  );
};

export default Settings;