// src/App.jsx
import React from 'react';
import ThreeScene from './components/ThreeScene';
import Navbar from './components/Navbar';
import './components/styles.css';
import ScrollTriggeredContent from './components/ScrollTriggeredContent';

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <Navbar />
        <ThreeScene />
        <ScrollTriggeredContent />
      </div>
    </div>
  );
};

export default App;