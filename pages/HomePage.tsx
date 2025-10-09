import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white/60 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
        <div className="text-burnt-orange mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-stone-gray">{description}</p>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center text-center bg-transparent px-4 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://cdn.pixabay.com/video/2024/05/29/211333_large.mp4"
        ></video>
        <div className="absolute inset-0 bg-cerulean-blue/40 z-10"></div>
        <AnimatedSection className="max-w-4xl z-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Rainbow: <span className="text-mustard-yellow">Science Meets Sustainability</span> in Agriculture
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ivory max-w-3xl mx-auto">
            Harnessing nanotechnology and organic innovation to boost yields, improve soil health, and create profitable, eco-friendly farming systems.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="bg-burnt-orange text-white font-bold py-3 px-8 rounded-full hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Growing with Us
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Intro & Impact Section */}
      <section className="py-20 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-lg text-stone-gray max-w-4xl mx-auto mb-12">
                Welcome to Rainbow, a global leader in sustainable agriculture solutions. We combine nanotechnology, certified organic inputs, and expert agronomy to help farmers and agri-businesses achieve higher productivity, healthier soils, and lasting profitability. Our mission is to build a future where agriculture is innovative, profitable, and environmentally responsible.
            </p>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-cerulean-blue mb-4">Our Impact</h3>
                <p className="text-stone-gray font-medium max-w-4xl mx-auto">
                    With farmers across India and global markets, Rainbow is redefining agriculture. From nano-powered crop care to sustainable soil solutions, we deliver measurable improvements that support resilient farming systems worldwide.
                </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

       {/* Key Highlights Section */}
      <section className="py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <AnimatedSection className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">Key Highlights</h2>
           </AnimatedSection>
            <AnimatedSection className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                 <FeatureCard 
                    title="Boost Productivity"
                    description="Our advanced nanotech and bio-stimulants are designed to dramatically increase crop yields."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>}
                 />
                 <FeatureCard 
                    title="Restore Soil Health"
                    description="We use carbon enhancers and beneficial microbes to build long-term fertility for resilient, living soil."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.5 17.25l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 13.5l.398 1.197a3.375 3.375 0 002.456 2.456l1.197.398-1.197.398a3.375 3.375 0 00-2.456 2.456z" /></svg>}
                 />
                 <FeatureCard 
                    title="Cut Farming Costs"
                    description="Our precision organic solutions are engineered to lower input expenses, boosting your bottom line."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>}
                 />
                 <FeatureCard 
                    title="Global Quality"
                    description="Our solutions are certified and trusted by Tea, Spice, and Coffee Boards to help farmers meet global standards."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                 />
            </AnimatedSection>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-20 bg-ivory/50">
          <AnimatedSection className="text-center max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800">Discover how Rainbow can help you grow more, sustainably.</h2>
              <div className="mt-8">
                  <Link to="/services" className="bg-burnt-orange text-white font-bold py-3 px-8 rounded-full hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg">
                      Explore Our Solutions
                  </Link>
              </div>
          </AnimatedSection>
      </section>
    </div>
  );
};

export default HomePage;
