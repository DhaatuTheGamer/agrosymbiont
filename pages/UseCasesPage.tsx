import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const CaseStudyCard: React.FC<{ title: string, category: string, challenge: string, solution: string, result: string, testimonial?: string }> = ({ title, category, challenge, solution, result, testimonial }) => (
    <div className="bg-white/60 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-burnt-orange flex flex-col h-full">
        <p className="text-sm font-semibold text-cerulean-blue uppercase tracking-wider">{category}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">{title}</h3>
        <div className="flex-grow">
            <h4 className="font-bold text-stone-gray">Challenge:</h4>
            <p className="text-stone-gray mb-3">{challenge}</p>
        </div>
        <div className="flex-grow">
            <h4 className="font-bold text-stone-gray">Solution:</h4>
            <p className="text-stone-gray mb-3">{solution}</p>
        </div>
        <div className="flex-grow">
            <h4 className="font-bold text-stone-gray">Results:</h4>
            <p className="text-stone-gray mb-3 font-semibold text-gray-800">{result}</p>
        </div>
        {testimonial && (
            <div className="mt-4 border-t pt-4">
                <p className="text-stone-gray italic">"{testimonial}"</p>
            </div>
        )}
    </div>
);


const UseCasesPage: React.FC = () => {
  return (
    <div className="bg-ivory/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
                <h1 className="text-5xl font-extrabold text-white">Proven Impact: Success Stories from Rainbow Farms</h1>
                <p className="mt-4 text-lg text-ivory max-w-3xl mx-auto">
                    Every success story begins with a challenge. At Rainbow, our nanotech-driven, organic solutions have helped farmers worldwide reduce costs, restore soil health, and boost yields. Here’s how we’re making a difference.
                </p>
            </AnimatedSection>

            <AnimatedSection className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <CaseStudyCard 
                    title="Tea Growers in Assam"
                    category="Tea Plantations"
                    challenge="Soil fertility decline, falling yields, and high input costs."
                    solution="Applied nano-inputs, bio-nutrients, and provided expert agronomist guidance to restore soil health."
                    result="+25% yield, reduced input costs, and significantly improved soil carbon levels."
                    testimonial="Rainbow changed our farm’s future—profits up, soil alive again."
                />
                <CaseStudyCard 
                    title="Export-Grade Spice Harvests"
                    category="Spice Farms"
                    challenge="Meeting stringent international quality standards for spice exports while maintaining organic certification."
                    solution="Implementation of our certified organic nanotech solutions to improve plant health and produce quality."
                    result="Consistent achievement of export-grade quality, opening up new premium markets for farmers."
                    testimonial="Our spices have never been better. We are now a preferred supplier for European markets."
                />
                <CaseStudyCard 
                    title="Eco-Friendly Coffee Estates"
                    category="Coffee Estates"
                    challenge="High incidence of pest attacks, leading to crop loss and dependency on chemical pesticides."
                    solution="Adopting eco-friendly crop protection using our bio-pesticides and beneficial microorganisms."
                    result="Drastic reduction in pest-related losses and complete elimination of chemical residues."
                    testimonial="We're producing high-quality coffee beans sustainably, and our ecosystem is thriving."
                />
            </AnimatedSection>
            
            <AnimatedSection className="mt-24 text-center">
                <p className="text-xl text-stone-gray max-w-3xl mx-auto">
                    Every farm has a story, and Rainbow is here to help write the next chapter of sustainable growth.
                </p>
                <div className="mt-8">
                    <Link to="/contact" className="bg-burnt-orange text-white font-bold py-3 px-8 rounded-full hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg">
                        Share Your Story
                    </Link>
                </div>
            </AnimatedSection>
        </div>
    </div>
  );
};

export default UseCasesPage;