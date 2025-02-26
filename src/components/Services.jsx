// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-items">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem?</p>
          <button>Read More</button>
        </div>
        <div className="service-item">
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem?</p>
          <button>Read More</button>
        </div>
        <div className="service-item">
          <h3>Digital Marketing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem?</p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;