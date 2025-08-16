import React, { useState } from 'react';

// Breakfast
import dhokla from '../assets/dhokla.jpg';
import thepla from '../assets/thepla.jpg';
import idli from '../assets/idli.jpg';
import poha from '../assets/poha.jpg';
import upma from '../assets/upma.jpg';
import paratha from '../assets/dosa.jpg';

// Lunch
import dal from '../assets/dal.jpg';
import rice from '../assets/rice.jpg';
import gobhi from '../assets/gobhi.jpg';
import pbm from '../assets/pbm.jpg';
import roti from '../assets/phulka.jpg';
import salad from '../assets/barfi.jpg';

// High Tea
import samosa from '../assets/samosa.jpg';
import sandwich from '../assets/sandwich.jpg';
import chai from '../assets/tea.jpg';
import coffee from '../assets/coffee.jpg';
import pastry from '../assets/vadapav.jpg';
import cookies from '../assets/kachori.jpg';

// Dinner
import shahi from '../assets/shahi.jpg';
import bhindi from '../assets/bhindi.jpg';
import kheer from '../assets/kheer.jpg';
import pulao from '../assets/pulao.jpg';
import naan from '../assets/raita.jpg';
import gulab from '../assets/roti.jpg';

const Menu = () => {
  const [selected, setSelected] = useState("Breakfast");

  const menuItems = {
    Breakfast: [
      { src: dhokla, name: "Dhokla" },
      { src: thepla, name: "Thepla" },
      { src: idli, name: "Idli Sambhar" },
      { src: poha, name: "Poha" },
      { src: upma, name: "Upma" },
      { src: paratha, name: "Masala Dosa" }
    ],
    Lunch: [
      { src: dal, name: "Dal Tadka" },
      { src: rice, name: "Jeera Rice" },
      { src: gobhi, name: "Aloo Gobhi" },
      { src: pbm, name: "Paneer Butter Masala" },
      { src: roti, name: "Phulka" },
      { src: salad, name: "Barfi" }
    ],
    "High Tea": [
      { src: samosa, name: "Samosa" },
      { src: sandwich, name: "Veg Sandwich" },
      { src: chai, name: "Masala Chai" },
      { src: coffee, name: "Coffee" },
      { src: pastry, name: "Vada Pav" },
      { src: cookies, name: "Kachori" }
    ],
    Dinner: [
      { src: shahi, name: "Shahi Paneer" },
      { src: bhindi, name: "Bhindi Masala" },
      { src: kheer, name: "Kheer" },
      { src: pulao, name: "Veg Pulao" },
      { src: naan, name: "Raita" },
      { src: gulab, name: "Tandoori Roti" }
    ]
  };

  const scrollToSection = (meal) => {
    setSelected(meal);
    document.getElementById(meal.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Menu Buttons */}
      <div className="flex justify-center gap-8 mb-16 flex-wrap">
        {Object.keys(menuItems).map((meal) => (
          <button
            key={meal}
            onClick={() => scrollToSection(meal)}
            className={`px-4 py-2 rounded-lg font-semibold transition 
              ${selected === meal 
                ? "bg-yellow-500 text-white" 
                : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {meal}
          </button>
        ))}
      </div>

      {/* Sections */}
      {Object.keys(menuItems).map((meal) => (
        <section
          key={meal}
          id={meal.toLowerCase().replace(/\s/g, "-")}
          className="bg-slate-400 border rounded-lg shadow-lg p-4 mb-16"
        >
          <h1 className="text-3xl font-extrabold text-center mb-6 text-yellow-500 relative">
            {meal}
            <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded"></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {menuItems[meal].map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden shadow hover:scale-105 transition-transform"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <p className="text-center p-2 font-medium bg-gray-50">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;