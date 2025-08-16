import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero2 from './Components/Hero2';
import Footer from './Components/Footer';
import About from './Components/About';
import Menu from './Components/Menu';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-200 overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero2 />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
