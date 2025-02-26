// src/ScrollTriggeredContent.jsx
import React, { useState, useEffect } from 'react';
import ThreeScene from './ThreeScene';

const ScrollTriggeredContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-triggered-content">
      {!isScrolled && (
        <div className="random-text">
          <h1>Random Text Goes Here</h1>
          <p>This is a placeholder for random text.</p>
        </div>
      )}
      {isScrolled && (
        <div className="content-container">
          <div className="model-container" style={{ transform: isScrolled ? 'translateX(0)' : 'translateX(-100%)' }}>
            <ThreeScene />
          </div>
          <div className="text-container" style={{ transform: isScrolled ? 'translateX(0)' : 'translateX(100%)' }}>
            <h1>Welcome to My Portfolio</h1>
            <p>This is a sample portfolio page with a 3D model background.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollTriggeredContent;