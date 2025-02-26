// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThreeScene from './components/ThreeScene';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ThreeScene />
    </div>
  );
}

export default App;