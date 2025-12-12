import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'fa-car-side',
      title: 'Visual Journey',
      description: 'Explore the fastest, rarest, and most desirable cars ever built.',
      gradient: 'from-red-600 to-red-800',
    },
    {
      icon: 'fa-fire-flame-curved',
      title: 'For Enthusiasts',
      description: 'Crafted for true car lovers — where design, sound, and speed unite.',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: 'fa-gear',
      title: 'Engineering Specs',
      description: 'Discover each masterpiece — from engineering specs to brand legacy.',
      gradient: 'from-red-700 to-red-900',
    },
    {
      icon: 'fa-video',
      title: 'High-Quality Media',
      description: 'Explore galleries and showcases that let you feel the asphalt rush.',
      gradient: 'from-red-500 to-red-700',
    },
    {
      icon: 'fa-flag-checkered',
      title: 'Stay Updated',
      description: 'New brands, models, and automotive innovations every month.',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      icon: 'fa-gauge-high',
      title: 'Performance Data',
      description: 'Detailed specs, top speeds, horsepower, and unique production numbers.',
      gradient: 'from-red-800 to-red-600',
    },
  ];

  const stats = [
    { number: '23+', label: 'Brands', icon: 'fa-trophy' },
    { number: '200+', label: 'Models', icon: 'fa-car' },
    { number: '1000+', label: 'HP', icon: 'fa-bolt' },
    { number: '∞', label: 'Passion', icon: 'fa-heart' },
  ];

  return (
    <section id="about" className="relative py-10 md:py-12 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements - Smaller */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute top-0 left-0 right-0 h-full opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Racing Track Decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 opacity-5">
        <div className="absolute left-0 w-full h-full bg-gradient-to-r from-transparent via-red-600 to-transparent">
          <div className="absolute left-0 top-0 w-4 h-full bg-red-600 animate-pulse" style={{ animation: 'moveRight 3s linear infinite' }}></div>
        </div>
      </div>

      {/* Car Silhouette Decorations */}
      <div className="absolute top-20 right-10 opacity-5 hidden md:block">
        <i className="fas fa-car-side text-red-600 text-6xl transform rotate-12"></i>
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 hidden md:block">
        <i className="fas fa-car-side text-red-600 text-6xl transform -rotate-12"></i>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header with Creative Elements */}
        <div className="text-center mb-8 relative">
          {/* Speedometer Icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-20">
            <i className="fas fa-gauge-high text-red-600 text-4xl animate-spin" style={{ animationDuration: '3s' }}></i>
          </div>
          
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <div className="relative">
              <i className="fas fa-car-side text-red-600 text-2xl animate-bounce"></i>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800">
              About Asphalt Velocity
            </span>
            {/* Sparkle effects */}
            <span className="absolute -top-1 -right-1 text-red-500 text-sm animate-pulse">✨</span>
            <span className="absolute -bottom-1 -left-1 text-red-500 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>⚡</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Where <span className="text-red-500 font-semibold relative inline-block">
              Power
              <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-red-500 animate-pulse"></span>
            </span>{' '}
            Meets{' '}
            <span className="text-red-500 font-semibold relative inline-block">
              Perfection
              <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-red-500 animate-pulse"></span>
            </span>
          </p>
        </div>

        {/* Compact Stats with Gauge Effect */}
        <div className="grid grid-cols-4 gap-3 md:gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-900/40 to-red-800/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-red-600/30 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-900/30 group relative overflow-hidden"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-800/0 group-hover:from-red-600/20 group-hover:to-red-800/20 transition-all duration-300"></div>
              
              <div className="text-center relative z-10">
                <div className="relative inline-block mb-1.5">
                  <i className={`fas ${stat.icon} text-red-500 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                  {stat.icon === 'fa-heart' && (
                    <span className="absolute -top-1 -right-1 text-red-500 text-xs animate-pulse">❤️</span>
                  )}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors relative">
                  {stat.number}
                  {stat.number === '∞' && (
                    <span className="absolute -top-1 -right-2 text-red-500 text-xs animate-pulse">∞</span>
                  )}
                </div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Intro Card */}
        <div className="mb-8">
          <div className="relative bg-gradient-to-r from-red-900/30 via-red-800/30 to-red-900/30 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-red-600/40 shadow-xl shadow-red-900/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-flag-checkered text-red-500 text-xl"></i>
                <h3 className="text-xl md:text-2xl font-bold text-white">Welcome to the Ultimate Pit Stop</h3>
              </div>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Welcome to <strong className="text-red-400 text-lg">Asphalt Velocity</strong> — the ultimate
                digital pit stop for every car enthusiast, speed lover, and design admirer. Here,{' '}
                <em className="text-red-400 font-semibold">power meets perfection</em> and{' '}
                <em className="text-red-400 font-semibold">engineering meets emotion</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Compact Features Grid */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What Makes Us <span className="text-red-500">Different</span>
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-red-900/25 to-red-800/15 backdrop-blur-sm rounded-xl p-4 border border-red-600/30 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${feature.gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${feature.icon} text-white text-lg`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Why You'll Love It */}
        <div className="mb-8">
          <div className="relative bg-gradient-to-r from-red-600/15 via-red-700/15 to-red-600/15 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-red-500/40 shadow-xl shadow-red-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(179,0,0,0.08),transparent)]"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-heart text-red-500 text-xl animate-pulse"></i>
                <h3 className="text-xl md:text-2xl font-bold text-white">Why You'll Love It</h3>
              </div>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Asphalt Velocity isn't just a site — it's an{' '}
                <strong className="text-red-400 text-lg">experience</strong>. Whether you dream of driving
                one, owning one, or simply admiring them, we've built a space where{' '}
                <strong className="text-red-400">passion for cars comes alive</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Compact Quote Section */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-800/5 rounded-2xl blur-xl"></div>
            <blockquote className="relative bg-gradient-to-r from-red-900/30 to-red-800/30 backdrop-blur-md rounded-2xl p-5 md:p-6 border-l-2 border-red-500 shadow-lg">
              <div className="flex items-start gap-3">
                <i className="fas fa-quote-left text-red-500 text-2xl mt-1"></i>
                <div>
                  <p className="text-base md:text-lg italic text-white leading-relaxed mb-2">
                    "Feel the roar, the curves, the craftsmanship — because here, speed isn't just measured
                    in seconds, it's felt in the soul."
                  </p>
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <i className="fas fa-car-side"></i>
                    <span className="font-semibold">Asphalt Velocity</span>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>

        {/* Compact Vision Section */}
        <div>
          <div className="relative bg-gradient-to-br from-red-900/25 via-red-800/25 to-red-900/25 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-red-600/40 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-eye text-red-500 text-xl"></i>
                <h3 className="text-xl md:text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                To build a global hub for <strong className="text-red-400">car lovers</strong>,{' '}
                <strong className="text-red-400">creators</strong>, and{' '}
                <strong className="text-red-400">collectors</strong> — a place where innovation,
                performance, and art in motion are celebrated every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
