import React from 'react';
import brandsData from '../brands.json';

const Footer = () => {
  const socialLinks = brandsData.socialLinks;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero', icon: 'fa-home' },
    { name: 'Brands', href: '#products', icon: 'fa-car' },
    { name: 'About', href: '#about', icon: 'fa-info-circle' },
    { name: 'Contact', href: '#contact', icon: 'fa-envelope' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-red-950 to-black border-t-2 border-red-600 overflow-hidden">
      {/* Animated Background - Smaller */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10">
        {/* Compact Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-alex text-3xl md:text-4xl text-red-600 mb-2 drop-shadow-[0_0_8px_rgba(179,0,0,0.4)]">
              Asphalt Velocity
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-2">
              Where Power Meets Perfection. Explore the world's most prestigious automotive brands.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-red-500">
              <i className="fas fa-car-side text-sm"></i>
              <span className="text-xs font-semibold">Driven by Passion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-red-500 font-bold text-sm mb-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group text-sm"
                  >
                    <i className={`fas ${link.icon} text-xs group-hover:scale-110 transition-transform`}></i>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-red-500 font-bold text-sm mb-3 uppercase tracking-wider">Connect</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-10 h-10 rounded-full bg-red-900/40 border border-red-600/30 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-red-600/40 ${social.color}`}
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-base transition-transform duration-300 group-hover:scale-110`}></i>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black px-3">
              <i className="fas fa-car-side text-red-600 text-lg"></i>
            </div>
          </div>
        </div>

        {/* Compact Quote */}
        <div className="text-center mb-4">
          <blockquote className="text-gray-300 italic text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            <i className="fas fa-quote-left text-red-600 mr-1 text-xs"></i>
            "We appreciate your time and interest in Asphalt Velocity. Drive safe and stay passionate about cars!"
            <i className="fas fa-quote-right text-red-600 ml-1 text-xs"></i>
          </blockquote>
        </div>

        {/* Compact Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4 border-t border-red-600/20">
          <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            &copy; {currentYear} <span className="text-red-500 font-semibold">Asphalt Velocity</span> | Designed for Car Enthusiasts
          </div>
          <div className="flex items-center gap-2 text-red-500">
            <i className="fas fa-heart animate-pulse text-xs"></i>
            <span className="text-xs">Made with Passion</span>
          </div>
        </div>

        {/* Speed Lines Decoration - Smaller */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      </div>

      {/* Smaller Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600/20"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-600/20"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-600/20"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600/20"></div>
    </footer>
  );
};

export default Footer;
