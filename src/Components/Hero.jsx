import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 grid lg:grid-cols-2 items-center p-10 gap-8">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1B263B]">
          Organize Your Reading World.
        </h1>
        <p className="text-lg text-gray-700">
          Trove helps you track your library, discover your next favorite book,
          and connect with a community of readers. All in one place.
        </p>
        <button className="bg-[#778DA9] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6a7c95] transition">
          Get Started
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src="https://ea693cc8-c897-4093-a98f-50cbceed70f6.lovableproject.com/src/assets/hero-bookshelf.jpg"
          alt="Bookshelf"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
