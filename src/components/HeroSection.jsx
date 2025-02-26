// src/components/HeroSection.jsx
import React from 'react';
import ThreeDModel from './ThreeDModel';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h1>Hello, It's Me John Kendrick And I'm a Frontend Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id autem.</p>
        <button>Download CV</button>
      </div>
      <ThreeDModel />
    </section>
  );
};

export default HeroSection;