import React, { useEffect, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: 'fa-eye',
      title: 'Visual Journey',
      description: 'Explore the fastest, rarest, and most desirable cars ever built.',
      gradient: 'from-red-600 to-rose-900',
      delay: '0s'
    },
    {
      icon: 'fa-gauge-high',
      title: 'Performance Data',
      description: 'Detailed specs, top speeds, horsepower, and unique production numbers.',
      gradient: 'from-red-700 to-red-950',
      delay: '0.1s'
    },
    {
      icon: 'fa-gears',
      title: 'Engineering Specs',
      description: 'Discover each masterpiece — from engineering specs to brand legacy.',
      gradient: 'from-orange-700 to-red-900',
      delay: '0.2s'
    },
  ];

  const stats = [
    { number: '23+', label: 'Brands', icon: 'fa-trophy', color: 'text-yellow-500' },
    { number: '200+', label: 'Models', icon: 'fa-car-side', color: 'text-blue-400' },
    { number: '1000+', label: 'HP', icon: 'fa-bolt', color: 'text-red-500' },
    { number: '∞', label: 'Passion', icon: 'fa-fire', color: 'text-orange-500' },
  ];

  return (
    <section id="about" className="relative py-20 px-4 md:px-8 overflow-hidden bg-asphalt-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-12 bg-red-600"></span>
              <span className="text-red-500 font-mono tracking-widest text-sm uppercase">About Us</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white transform -skew-x-6">
              ASPHALT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">VELOCITY</span>
            </h2>
            <div className="absolute -z-10 top-1/2 left-10 text-9xl font-black text-white/5 whitespace-nowrap hidden lg:block transform -translate-y-1/2 -skew-x-12">
              PASSION & SPEED
            </div>
          </div>

          <p className="md:max-w-md text-gray-400 text-lg border-l-2 border-red-600/30 pl-6 leading-relaxed">
            Where <strong className="text-white">power meets perfection</strong>. We aren't just a gallery; we are a tribute to the engineering marvels that conquer the roads.
          </p>
        </div>

        {/* Dashboard Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group relative bg-[#1a1a1a]/50 border border-white/5 p-6 rounded-2xl hover:border-red-600/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500 rounded-2xl"></div>

              {/* Gauge Graphic */}
              <div className="relative w-16 h-16 mb-4 mx-auto md:mx-0">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path
                    className="text-gray-800"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className={`${stat.color} drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]`}
                    strokeDasharray={`${index * 20 + 40}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`fas ${stat.icon} ${stat.color} text-xl`}></i>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white font-mono mb-1">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid - Asymmetrical */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">

          {/* Large Main Feature */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-75"></div>
            {/* Decorative Image/Pattern equivalent */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000 ease-out"></div>

            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="w-16 h-16 rounded-full bg-red-600/20 backdrop-blur-md flex items-center justify-center mb-6 border border-red-500/30 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-flag-checkered text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">The Ultimate Pit Stop</h3>
              <p className="text-gray-300 max-w-lg text-lg">
                Asphalt Velocity isn't just a site — it's an experience. Whether you dream of driving one, owning one, or simply admiring them, we've built a space where <span className="text-red-500 font-semibold">speed is a language</span> we all speak.
              </p>
            </div>
          </div>

          {/* Side Features Vertical Stack */}
          <div className="flex flex-col gap-6 h-full">
            {features.map((feature, idx) => (
              <div key={idx} className="flex-1 relative group bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-red-500/30 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-all duration-500`}></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)]`}>
                    <i className={`fas ${feature.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{feature.title}</h4>
                    <p className="text-sm text-gray-400 leading-snug">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
