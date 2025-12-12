import React, { useState, useEffect } from 'react';
import brandsData from '../brands.json';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = brandsData.videos;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const nextSlide = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="hero" className="relative w-full h-[600px] md:h-[700px] overflow-hidden mt-16">
      {/* Video Background */}
      <div className="relative w-full h-full">
        {videos.map((video, index) => (
          <video
            key={video.id}
            src={video.src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-20"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-red-600/70 hover:bg-red-600 text-white text-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-red-900/50 backdrop-blur-sm"
        aria-label="Previous video"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-red-600/70 hover:bg-red-600 text-white text-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-red-900/50 backdrop-blur-sm"
        aria-label="Next video"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 right-0 z-30 text-center pb-12 px-4">
        <h1 className="font-alex text-5xl md:text-7xl text-red-500 mb-4 animate-slide-down drop-shadow-[0_0_10px_rgba(229,9,20,0.8)]">
          Asphalt Velocity
        </h1>
        <p className="text-white/90 text-sm md:text-base uppercase tracking-widest mb-2 animate-slide-up font-light">
          Where Power Meets Perfection
        </p>
        <p className="text-white/80 text-xs md:text-sm uppercase tracking-wide mb-2 animate-slide-up">
          Explore the Fastest, Rarest, and Most Desirable Cars Ever Built
        </p>
        <p className="text-white/70 text-xs md:text-sm uppercase tracking-wide animate-slide-up">
          Feel the Roar, the Curves, the Craftsmanship
        </p>
      </div>

      {/* Video Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex
                ? 'bg-red-600 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

