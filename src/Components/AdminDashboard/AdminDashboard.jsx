import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Analytics from "./Analytics";
import FaqManagement from "./FaqManagement";
import Settings from "./Settings";

const AdminDashboard = ({ onLogout }) => {
  const [activeView, setActiveView] = useState("analytics");

  const renderContent = () => {
    switch (activeView) {
      case "analytics": return <Analytics />;
      case "faq": return <FaqManagement />;
      case "settings": return <Settings />;
      default: return <Analytics />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar activeView={activeView} setActiveView={setActiveView} onLogout={onLogout} />
      <main className="flex-1 ml-64 p-10 overflow-y-auto">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
