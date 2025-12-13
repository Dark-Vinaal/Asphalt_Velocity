
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import brandsData from '../brands.json';

const BrandDetail = () => {
    const { id } = useParams();
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        // Find brand by id (handling string/number mismatch)
        const foundBrand = brandsData.brands.find(b => b.id === parseInt(id));
        setBrand(foundBrand);
        window.scrollTo(0, 0);
    }, [id]);

    if (!brand) {
        return (
            <div className="min-h-screen bg-asphalt-dark flex items-center justify-center">
                <div className="text-white text-xl">Loading Brand...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-asphalt-dark pt-20">
            {/* Hero Section for Brand */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(/${brand.logo})`, filter: 'blur(20px)', opacity: 0.3 }}
                />
                <img
                    src={`/${brand.logo}`}
                    alt={brand.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-auto object-contain z-20 drop-shadow-[0_0_30px_rgba(255,0,0,0.5)] animate-fade-in"
                />
                <div className="absolute bottom-10 left-0 right-0 z-20 text-center">
                    <h1 className="font-alex text-6xl md:text-8xl text-red-600 drop-shadow-[0_0_10px_rgba(179,0,0,0.8)]">
                        {brand.name}
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <Link
                    to="/"
                    className="inline-flex items-center text-red-500 hover:text-white mb-8 transition-colors group"
                >
                    <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                    Back to Garage
                </Link>

                {/* Brand Info */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">Legacy & Power</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {brand.description}. {brand.name} represents the pinnacle of automotive engineering, combining raw power with sophisticated design.
                            Known for their distinct {brand.color} signature aesthetic, they continue to push the boundaries of what's possible on four wheels.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-asphalt-light p-4 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-colors">
                                <div className="text-red-500 text-sm uppercase tracking-wider mb-1">Top Speed</div>
                                <div className="text-white text-2xl font-bold">200+ mph</div>
                            </div>
                            <div className="bg-asphalt-light p-4 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-colors">
                                <div className="text-red-500 text-sm uppercase tracking-wider mb-1">0-60 mph</div>
                                <div className="text-white text-2xl font-bold">2.5s</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full"></div>
                        <img
                            src={`/${brand.logo}`}
                            alt={`${brand.name} side view`}
                            className="relative w-full rounded-2xl shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>

                {/* Model Garage Section (Replaces Official Website Link) */}
                <div className="border-t border-red-600/30 pt-10">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">The <span className="text-red-600">Garage</span></h2>
                            <p className="text-gray-400">Iconic models from the {brand.name} lineup.</p>
                        </div>
                        <i className="fas fa-warehouse text-red-600/20 text-5xl"></i>
                    </div>

                    {brand.models && brand.models.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {brand.models.map((model, index) => (
                                <div key={index} className="group relative bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/20">
                                    <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity">
                                        <i className="fas fa-car text-white text-2xl"></i>
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-4 text-center border-b border-white/5 pb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tight">{model.name}</h3>
                                            <span className="inline-block mt-1 bg-red-600/10 text-red-500 text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-widest">{model.production}</span>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors">
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <i className="fas fa-tachometer-alt text-red-600 w-5 text-center"></i>
                                                    <span className="text-xs uppercase tracking-wider">Speed</span>
                                                </div>
                                                <span className="text-white text-sm font-semibold">{model.topSpeed}</span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex flex-col items-center justify-center p-2 bg-white/5 rounded-lg border border-transparent group-hover:border-red-600/20 transition-colors">
                                                    <i className="fas fa-horse-head text-gray-400 mb-1"></i>
                                                    <span className="text-white font-bold text-sm">{model.horsepower}</span>
                                                    <span className="text-[10px] text-gray-500 uppercase">Power</span>
                                                </div>
                                                <div className="flex flex-col items-center justify-center p-2 bg-white/5 rounded-lg border border-transparent group-hover:border-red-600/20 transition-colors">
                                                    <i className="fas fa-cogs text-gray-400 mb-1"></i>
                                                    <span className="text-white font-bold text-sm">{model.displacement}</span>
                                                    <span className="text-[10px] text-gray-500 uppercase">Disp.</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center pt-2 border-t border-white/5">
                                                <div className="flex items-center gap-2">
                                                    <i className="fas fa-calendar-alt text-gray-500 text-xs"></i>
                                                    <span className="text-gray-400 text-xs font-mono">{model.year}</span>
                                                </div>
                                                <span className="text-green-500 font-mono font-bold text-sm">{model.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect Bar */}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-white/5 rounded-xl border border-dashed border-white/10">
                            <p className="text-gray-500">Model data unavailable for this brand.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;
