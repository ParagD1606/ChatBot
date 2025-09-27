import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero2 from './Components/Hero2';
import Footer from './Components/Footer';
import About from './Components/About';
import ChatBot from './Components/ChatBot';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'; // Import AdminDashboard

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Add useNavigate here

  const hideLayout = location.pathname === "/chat" || location.pathname === "/admin";

  return (
    <div className="min-h-screen w-fulloverflow-x-hidden">
      {!hideLayout && <Navbar navigate={navigate} />} {/* Pass navigate as a prop */}
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
          <Route path="/admin" element={<AdminDashboard />} /> {/* Add the new route here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;