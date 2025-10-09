
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-ivory/30">
      <AnimatedSection>
        <h1 className="text-5xl font-extrabold text-gray-800">Resources</h1>
        <p className="mt-4 text-2xl text-burnt-orange font-semibold">Coming Soon</p>
        <p className="mt-2 text-lg text-stone-gray max-w-2xl mx-auto">
          Our library of brochures, whitepapers, and technical guides is currently being compiled. Soon, you'll have access to in-depth information about our technology and best practices in sustainable agriculture.
        </p>
      </AnimatedSection>
    </div>
  );
};

export default ResourcesPage;
