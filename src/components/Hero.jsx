import React, { useState, useEffect } from 'react';
import brandsData from '../brands.json';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = brandsData.videos;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 6000); // Slightly longer duration

    return () => clearInterval(interval);
  }, [videos.length]);

  const nextSlide = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Dynamic Overlay per slide if needed, but keeping global for consistency */}
          </div>
        ))}

        {/* Cinematic Overlay - Reddish Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-900/10 to-asphalt-dark z-20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-dark via-transparent to-black/40 z-20"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-red-600 text-white text-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] backdrop-blur-sm group"
        aria-label="Previous video"
      >
        <i className="fas fa-chevron-left group-hover:-translate-x-0.5 transition-transform"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-red-600 text-white text-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] backdrop-blur-sm group"
        aria-label="Next video"
      >
        <i className="fas fa-chevron-right group-hover:translate-x-0.5 transition-transform"></i>
      </button>

      {/* Hero Content */}
      <div className="absolute bottom-32 md:bottom-24 left-0 right-0 z-30 text-center px-4">
        <h1 className="font-alex text-6xl md:text-8xl lg:text-9xl text-red-600 mb-6 animate-slide-down drop-shadow-[0_0_15px_rgba(179,0,0,0.8)]">
          Asphalt Velocity
        </h1>
        <div className="space-y-3">
          <p className="text-gray-200 text-sm md:text-lg font-bold uppercase tracking-[0.2em] animate-slide-up [animation-delay:200ms] opacity-0 forwards">
            Where Power Meets Perfection
          </p>
          <p className="hidden md:block text-gray-400 text-sm uppercase tracking-widest animate-slide-up [animation-delay:400ms] opacity-0 forwards">
            Explore the Fastest, Rarest, and Most Desirable Cars Ever Built
          </p>
        </div>

        <div className="mt-10 animate-fade-in [animation-delay:800ms] opacity-0 forwards">
          <i className="fas fa-chevron-down text-red-500 text-2xl animate-bounce"></i>
        </div>
      </div>

      {/* Video Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${index === currentVideoIndex
                ? 'bg-red-600 w-12 shadow-[0_0_10px_rgba(220,20,60,0.8)]'
                : 'bg-white/30 w-4 hover:bg-white/60'
              }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

