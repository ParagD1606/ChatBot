import React from "react";
import { MessageSquare, Users, MessageCircle, Smile } from "lucide-react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import RecentConversations from "./RecentConversations";

// Analytics Widgets
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

// Language Usage Pie Chart
const LanguageUsageChart = () => {
  const data = [
    { name: "English", value: 56 },
    { name: "Hindi", value: 19 },
    { name: "Gujarati", value: 13 },
    { name: "Marathi", value: 12 },
  ];

  const COLORS = ["#3b82f6", "#a855f7", "#ef4444", "#f97316"];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

// Main Analytics Component
const Analytics = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <button className="bg-[#F2A84F] text-white font-semibold px-4 py-2 rounded-lg hover:scale-105 transition">Export Report</button>
    </div>
    <p className="text-gray-700">Monitor SAHAYAK performance and user interactions</p>

    <AnalyticsWidgets />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Language Usage</h2>
        <LanguageUsageChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
        <p className="text-gray-500">No data available yet.</p>
      </div>
    </div>

    <RecentConversations />
  </div>
);

export default Analytics;
