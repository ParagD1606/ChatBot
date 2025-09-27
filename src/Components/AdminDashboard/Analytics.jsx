import React from "react";
import { MessageSquare, Users, MessageCircle, Smile } from "lucide-react";
import RecentConversations from "./RecentConversations";

const AnalyticsWidgets = () => {
  const stats = [
    { title: "Total Conversations", value: "16", change: "+12% this week", icon: <MessageSquare size={24} />, color: "text-blue-600 bg-blue-100" },
    { title: "Unique Students", value: "16", change: "+8% this week", icon: <Users size={24} />, color: "text-green-600 bg-green-100" },
    { title: "Avg Messages/Chat", value: "4.5", change: "", icon: <MessageCircle size={24} />, color: "text-purple-600 bg-purple-100" },
    { title: "Satisfaction", value: "0%", change: "", icon: <Smile size={24} />, color: "text-orange-600 bg-orange-100" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <div className={`${s.color} p-3 rounded-full`}>{s.icon}</div>
          <div>
            <p className="text-gray-500 text-sm">{s.title}</p>
            <h2 className="text-2xl font-bold text-gray-800">{s.value}</h2>
            {s.change && <p className="text-xs text-gray-400">{s.change}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

const Analytics = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Export Report</button>
    </div>
    <p className="text-gray-700">Monitor SAHAYAK performance and user interactions</p>
    <AnalyticsWidgets />
    <RecentConversations />
  </div>
);

export default Analytics;
