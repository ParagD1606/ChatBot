import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero2 from './Components/Hero2';
import Footer from './Components/Footer';
import About from './Components/About';
import ChatBot from './Components/ChatBot';

const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayout = location.pathname === "/chat";

  return (
    <div className="min-h-screen w-fulloverflow-x-hidden">
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero2 />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
