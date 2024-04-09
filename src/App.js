import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './js/navbar'; // Ensure this path is correct
import Landing from './js/landing'; // Import the landing page
import Home from './js/home';
import About from './js/about';
import Projects from './js/projects';
import './App.css'; // Ensure this path matches your file structure

// Component to determine whether to show the Navbar
const Layout = () => {
  const location = useLocation(); // Hook to access the current route location

  // Determine if we're on the landing page (assuming the landing page path is '/')
  const showNavbar = location.pathname !== '/joe';

  return (
    <>
      {showNavbar && <Navbar />}
      <div style={{ paddingLeft: showNavbar ? '100px' : '0px' }}> {/* Adjust based on Navbar's width to prevent content overlap */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
