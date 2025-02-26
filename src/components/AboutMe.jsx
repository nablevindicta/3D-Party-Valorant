// src/components/AboutMe.jsx
import React from 'react';
import ThreeDModel from './ThreeDModel';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="content">
        <h2>About Me</h2>
        <p>Frontend Developer!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus illo.</p>
        <button>Read More</button>
      </div>
      <ThreeDModel />
    </section>
  );
};

export default AboutMe;