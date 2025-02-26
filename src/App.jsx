// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;