import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandCards from './components/BrandCards';
import BrandDetail from './components/BrandDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-asphalt-dark font-poppins text-gray-100 selection:bg-red-600 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BrandCards />
              <About />
              <Contact />
            </>
          } />
          <Route path="/brand/:id" element={<BrandDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

