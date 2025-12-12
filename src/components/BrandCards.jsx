import React, { useState } from 'react';
import brandsData from '../brands.json';

const BrandCards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const brands = brandsData.brands;

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="products" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 uppercase tracking-widest mb-4 animate-slide-down">
            All Brands
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pl-12 bg-asphalt-light border-2 border-red-600/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all duration-300"
            />
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div className="gradient-border p-6 md:p-8 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="group relative bg-asphalt-light rounded-xl overflow-hidden border-2 border-transparent hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-2"
                >
                  {/* Card Image */}
                  <div className="relative h-48 bg-white/5 overflow-hidden">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-red-500 transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <p className="text-gray-400 text-sm text-center mb-4 line-clamp-2">
                      {brand.description}
                    </p>
                    <a
                      href={brand.link}
                      className="block w-full text-center py-2.5 px-6 bg-transparent border-2 border-red-600 text-red-600 rounded-full font-semibold uppercase tracking-wide text-sm hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Explore
                    </a>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <i className="fas fa-search text-6xl text-gray-600 mb-4"></i>
                <p className="text-gray-400 text-xl">No brands found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCards;

