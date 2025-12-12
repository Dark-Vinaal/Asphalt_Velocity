import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'BRANDS', href: '#products' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20'
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="font-alex text-3xl text-red-600 hover:text-red-500 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(229,9,20,0.6)]"
          >
            Asphalt Velocity
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium text-sm uppercase tracking-wider hover:text-red-600 transition-colors duration-300 border-b-2 border-transparent hover:border-red-600 pb-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-medium text-sm uppercase tracking-wider hover:text-red-600 transition-colors duration-300 py-2 border-l-2 border-transparent hover:border-red-600 pl-4"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </nav>
  );
};

export default Navbar;

