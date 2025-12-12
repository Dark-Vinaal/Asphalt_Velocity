import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandCards from './components/BrandCards';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-asphalt-dark">
      <Navbar />
      <Hero />
      <BrandCards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

