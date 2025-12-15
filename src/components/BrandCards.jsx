
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brandsData from '../brands.json';

const BrandCards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const brands = brandsData.brands;

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="products" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase tracking-tighter mb-4 animate-fade-in-up">
            Elite <span className="text-red-600">Collection</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto skew-x-[-20deg]"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <input
              type="text"
              placeholder="Find your machine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-8 py-4 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all duration-300 font-mono tracking-wider"
            />
            <i className="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-red-600 text-xl"></i>
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand) => (
              <div
                key={brand.id}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="group relative h-[320px] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-500 ease-out overflow-hidden hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:-translate-y-2"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Logo Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:-translate-y-12">
                  <div className="relative w-full h-32 flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={`${process.env.PUBLIC_URL}/${brand.logo}`}
                      alt={brand.name}
                      className="relative max-w-full max-h-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:brightness-125"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider group-hover:text-red-500 transition-colors duration-300">
                    {brand.name}
                  </h3>
                </div>

                {/* Hover Content (Slide Up) */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-end h-full pointer-events-none group-hover:pointer-events-auto">
                  <p className="text-gray-300 text-sm text-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                    {brand.description}
                  </p>
                  <Link
                    to={`/brand/${brand.id}`}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded skew-x-[-10deg] hover:bg-white hover:text-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                  >
                    <span>Explore</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>

                {/* Tech Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="inline-block p-6 rounded-full bg-white/5 mb-4 animate-pulse">
                <i className="fas fa-search-minus text-4xl text-gray-500"></i>
              </div>
              <p className="text-gray-400 text-xl font-light">No machines found matching "<span className="text-red-500">{searchTerm}</span>"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandCards;
