// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PARTY VALORANT</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;