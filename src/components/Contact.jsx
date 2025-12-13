import React, { useState } from 'react';
import brandsData from '../brands.json';

const Contact = () => {
  const socialLinks = brandsData.socialLinks;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: 'fa-envelope',
      title: 'COMM_CHANNEL_01',
      subtitle: 'DIRECT LINE',
      value: 'vinaalm898@gmail.com',
      link: 'mailto:vinaalm898@gmail.com',
      color: 'text-red-500',
      border: 'border-red-500/50'
    },
    {
      id: 'portfolio',
      icon: 'fa-briefcase',
      title: 'PORTFOLIO_LINK',
      subtitle: 'ACCESS GRANTED',
      value: 'Vinaal R',
      link: 'https://vinaalr.netlify.app/',
      color: 'text-blue-500',
      border: 'border-blue-500/50'
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 border-t border-white/5 bg-[#0a0a0a] overflow-hidden">

      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #333 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header - Telemetry Style */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-red-500 text-xs tracking-[0.2em] uppercase">System Status: Online</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 uppercase tracking-tighter">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Contact</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        {/* Contact Panels - Telemetry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.id}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`relative group bg-[#111] border border-white/10 p-1 overflow-hidden transition-all duration-300 hover:border-red-500/50`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out"></div>

              <div className="relative bg-[#151515] p-6 h-full flex items-center justify-between gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-gray-500 mb-1">{method.title} // {method.subtitle}</span>
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{method.value}</span>
                </div>

                <div className={`w-12 h-12 flex items-center justify-center border ${method.border} rounded-sm bg-white/5 group-hover:bg-red-500/10 transition-colors`}>
                  <i className={`fas ${method.icon} text-lg ${method.color}`}></i>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links - Pit Crew Badges */}
        <div className="flex flex-col items-center">
          <div className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6">Social Frequency</div>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 flex items-center justify-center bg-[#111] border border-white/10 hover:border-red-500 transition-all duration-300 skew-x-[-10deg] hover:skew-x-0 hover:scale-110"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white/20"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white/20 group-hover:bg-red-500 transition-colors"></div>

                <i className={`${social.icon} text-2xl text-gray-400 group-hover:text-white transition-colors transform skew-x-[10deg] group-hover:skew-x-0`}></i>

                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="mt-20 text-center">
          <a
            href="https://linktr.ee/Darkxzz999"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white rounded-none bg-red-700 hover:bg-red-600 transition-all duration-300 skew-x-[-10deg]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-3 transform skew-x-[10deg]">
              <i className="fas fa-power-off text-sm"></i>
              Connect System
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
