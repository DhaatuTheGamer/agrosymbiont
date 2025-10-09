
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const ServiceIconCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white/60 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
        <div className="flex items-center mb-4">
            <div className="text-burnt-orange mr-4 flex-shrink-0">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-stone-gray">{description}</p>
    </div>
);

const WhyChooseItem: React.FC<{children: React.ReactNode}> = ({children}) => (
    <li className="flex items-start">
        <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="text-stone-gray">{children}</span>
    </li>
);

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-ivory/20 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-5xl font-extrabold text-white">Our Technology Advantage: A Spectrum of Nature-Based Solutions</h1>
                    <p className="mt-4 text-lg text-ivory max-w-3xl mx-auto">
                        Rainbow integrates modern agronomy, nanotechnology, and certified organic products to deliver smarter, greener, and more profitable farming solutions. We don’t just provide products—we provide knowledge, expertise, and continuous support.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mt-16 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Key Service Areas</h2>
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <ServiceIconCard 
                            title="Soil Health Management"
                            description="Enrich soil fertility and microbial balance with bio-macro and micro-inputs, soil carbon enhancers, and bio-humic solutions."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>}
                        />
                         <ServiceIconCard 
                            title="Crop Productivity Enhancement"
                            description="Boost yields with bio-stimulants, growth promoters, and eco-friendly nutrients tailored to your crop needs."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>}
                        />
                         <ServiceIconCard 
                            title="Eco-Friendly Crop Protection"
                            description="Defend plants naturally with bio-pesticides and beneficial microorganisms, reducing chemical dependency and safeguarding ecosystems."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>}
                        />
                         <ServiceIconCard 
                            title="Life Science Innovations"
                            description="Harness the power of beneficial bacteria and fungi to create healthier soils and resilient crops."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5L14.25 10m-8.687 4.5h13.374c.621 0 1.125-.504 1.125-1.125V11.25c0-.621-.504-1.125-1.125-1.125H4.813c-.621 0-1.125.504-1.125 1.125v2.125c0 .621.504 1.125 1.125 1.125z" /></svg>}
                        />
                         <div className="md:col-span-2 flex justify-center">
                            <div className="max-w-xl w-full">
                                <ServiceIconCard 
                                    title="Expert Agronomy Support"
                                    description="Our specialists work with you at every step, ensuring optimal application, cost efficiency, and measurable results."
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>}
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Why Choose Us Section */}
                <AnimatedSection className="mt-24">
                    <div className="bg-white/50 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Why Choose Rainbow?</h2>
                        <ul className="space-y-4 text-lg">
                            <WhyChooseItem>Nanotechnology in farming for real yield growth.</WhyChooseItem>
                            <WhyChooseItem>Certified organic agricultural solutions.</WhyChooseItem>
                            <WhyChooseItem>Tailored, farmer-focused consultation.</WhyChooseItem>
                            <WhyChooseItem>Trusted by industry boards and global clients.</WhyChooseItem>
                        </ul>
                    </div>
                </AnimatedSection>
                
                 {/* CTA Section */}
                <AnimatedSection className="mt-24 text-center">
                    <p className="text-xl text-stone-gray max-w-3xl mx-auto">
                        Experience the future of farming with Rainbow’s integrated services and cutting-edge technologies.
                    </p>
                    <div className="mt-8">
                        <Link to="/contact" className="bg-burnt-orange text-white font-bold py-3 px-8 rounded-full hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg">
                            Book a Free Consultation
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

export default ServicesPage;
