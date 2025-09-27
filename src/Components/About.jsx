import React from "react";
import Aboutus from "../assets/Aboutus.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About SAHAYAK
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SAHAYAK is your one-stop platform for instant college information. 
            Track schedules, check fees, discover scholarships, and stay updated with real-time data to make smarter decisions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-64 md:h-96">
            <img
              src={Aboutus}
              alt="About SAHAYAK"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h3 className="text-2xl font-semibold">
              Why Choose <span className="text-blue-500">SAHAYAK?</span>
            </h3>
            <p>
              SAHAYAK is designed to simplify your college journey. Whether you’re exploring colleges, checking schedules, or applying for scholarships, we make it easy and accessible.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>🎓 Instant college information at your fingertips</li>
              <li>📅 Track class schedules and important dates</li>
              <li>💰 Check fees and explore scholarships easily</li>
              <li>📲 Real-time updates for smarter planning</li>
            </ul>
            <p>
              Our mission is to empower students with accurate, reliable, and actionable information so that every college decision is informed and stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
