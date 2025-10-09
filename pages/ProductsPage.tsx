
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-ivory/30">
      <AnimatedSection>
        <h1 className="text-5xl font-extrabold text-gray-800">Products & Solutions</h1>
        <p className="mt-4 text-2xl text-burnt-orange font-semibold">Coming Soon</p>
        <p className="mt-2 text-lg text-stone-gray max-w-2xl mx-auto">
          We are currently curating our innovative range of bio-inputs, stimulants, and soil enhancers. Check back soon to discover how our products can revolutionize your farm.
        </p>
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 bg-white/50 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl text-cerulean-blue">Bio-Inputs</h3>
                </div>
                 <div className="p-6 bg-white/50 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl text-cerulean-blue">Stimulants</h3>
                </div>
                 <div className="p-6 bg-white/50 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl text-cerulean-blue">Nutrients</h3>
                </div>
                 <div className="p-6 bg-white/50 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl text-cerulean-blue">Soil Enhancers</h3>
                </div>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProductsPage;
