import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css'; // Adjust this import path as necessary

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 5000); // Adjust time as needed
  }, [navigate]);

  return (
    <div className="landing-container">
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <h1 className="greeting">Welcome to My Portfolio!</h1>
    </div>
  );
};

export default Landing;
