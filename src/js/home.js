import React from 'react';
import '../css/home.css'; // Ensure the correct path

const Home = () => {
  return (
    <div className="home-container">
      {/* Rectangles for the background */}
      <div className="rectangle-1"></div>
      <div className="rectangle-2"></div>
      <div className="rectangle-3"></div>
      <div className="rectangle-4"></div>

      {/* Main content */}
      <div className="home-image"></div>
      <div className="home-text">
        <h1>Lukas Hedström</h1>
        <br></br><br></br>
        <p>I am a student in the Master of Science Programme in Interaction Technology and Design at Umeå University.</p>
      </div>
    </div>
  );
};

export default Home;
