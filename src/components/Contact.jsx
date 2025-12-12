import React from 'react';
import brandsData from '../brands.json';

const Contact = () => {
  const socialLinks = brandsData.socialLinks;

  const contactMethods = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'vinaalm898@gmail.com',
      link: 'mailto:vinaalm898@gmail.com',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: 'fa-briefcase',
      title: 'Portfolio',
      value: 'Vinaal R',
      link: 'https://vinaalr.netlify.app/',
      color: 'from-red-600 to-red-800',
    },
  ];

  return (
    <section id="contact" className="relative py-10 md:py-12 px-4 md:px-8 border-t-2 border-red-600/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Speed Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-red-600"></div>
            <i className="fas fa-envelope-circle-check text-red-600 text-xl animate-pulse"></i>
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800">
              Get In Touch
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Connect with us and join the <span className="text-red-500 font-semibold">Asphalt Velocity</span> community
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-xl p-5 border border-red-600/30 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fas ${method.icon} text-white text-lg`}></i>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{method.title}</div>
                  <div className="text-sm md:text-base font-semibold text-white group-hover:text-red-400 transition-colors">
                    {method.value}
                  </div>
                </div>
                <i className="fas fa-arrow-right text-red-600/50 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300"></i>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="mb-6">
          <div className="text-center mb-5">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              Follow Us On <span className="text-red-500">Social Media</span>
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-red-900/40 to-red-800/30 backdrop-blur-sm border border-red-600/30 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/50 ${social.color}`}
                aria-label={social.name}
              >
                {/* Animated Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-800/0 group-hover:from-red-600/30 group-hover:to-red-800/30 rounded-xl transition-all duration-300"></div>
                
                <i className={`${social.icon} text-xl md:text-2xl relative z-10 transition-transform duration-300 group-hover:scale-110`}></i>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
                  {social.name}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-4 border border-red-600/30">
            <p className="text-sm text-gray-300 mb-3">
              Have questions or want to collaborate?
            </p>
            <a
              href="https://linktr.ee/Darkxzz999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 active:scale-95"
            >
              <i className="fas fa-paper-plane"></i>
              <span>Get In Touch</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-5 hidden md:block">
          <i className="fas fa-comments text-red-600 text-4xl transform rotate-12"></i>
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 hidden md:block">
          <i className="fas fa-handshake text-red-600 text-4xl transform -rotate-12"></i>
        </div>
      </div>
    </section>
  );
};

export default Contact;
