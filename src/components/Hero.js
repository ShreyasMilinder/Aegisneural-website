// src/components/Hero.js

import React from 'react';
import './hero.css'; // Ensure this path is correct

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="text-4xl font-bold mb-4">Welcome to AegisNeural Learning</h2>
      <p className="text-lg mb-8">Your gateway to top-notch online learning and performance tracking.</p>
      <a href="#" className="btn-primary">Get Started</a>
    </section>
  );
};

export default Hero;
