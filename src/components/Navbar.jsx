import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'BRANDS', href: '/#products' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'CONTACT', href: '/#cnt' },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20'
        : 'bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-alex text-4xl text-red-600 hover:text-red-500 transition-all duration-300 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)] hover:scale-105"
          >
            Asphalt Velocity
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              location.pathname !== '/' && link.href.startsWith('/#') ?
                (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative text-white font-bold text-sm uppercase tracking-widest hover:text-red-500 transition-colors duration-300 group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href.replace('/', '')}
                    className="relative text-white font-bold text-sm uppercase tracking-widest hover:text-red-500 transition-colors duration-300 group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-red-600 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-2 bg-asphalt-dark/95 rounded-b-2xl border-t border-red-900/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="block text-white font-bold text-sm uppercase tracking-widest hover:text-red-600 hover:bg-white/5 transition-all duration-300 py-3 pl-6 border-l-4 border-transparent hover:border-red-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;

