import React from "react";
import Aboutus from "../assets/Aboutus.webp"

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
              About Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We’re passionate about delivering intuitive, high-performance, and
            visually stunning web solutions. Our goal is to make complex
            technology simple and accessible for everyone.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-64 md:h-96">
            <img
              src={Aboutus} // keep your image path here
              alt="About"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h3 className="text-2xl font-semibold">
              Why Choose <span className="text-blue-500">Us?</span>
            </h3>
            <p>
              We focus on crafting tailored solutions that perfectly align with
              your goals. Every project is built with modern technologies,
              responsive design, and a seamless user experience in mind.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>⚡ Lightning-fast performance</li>
              <li>🎨 Modern & visually engaging design</li>
              <li>🔒 Secure and reliable architecture</li>
              <li>📱 Fully responsive for all devices</li>
            </ul>
            <p>
              Our commitment to innovation and detail ensures that your digital
              presence truly stands out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
