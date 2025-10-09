import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const TeamMemberCard: React.FC<{ name: string, title: string, imageUrl: string }> = ({ name, title, imageUrl }) => (
    <div className="group text-center">
        <div className="relative">
            <img src={imageUrl} alt={name} className="w-full h-80 object-cover rounded-lg shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-cerulean-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-burnt-orange">{title}</p>
    </div>
);

const TimelineItem: React.FC<{ year: string, title: string, description: string, align: 'left' | 'right' }> = ({ year, title, description, align }) => (
    <div className={`mb-8 flex justify-between items-center w-full ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-cerulean-blue shadow-xl w-12 h-12 rounded-full">
            <h1 className="mx-auto font-semibold text-base text-white">{year}</h1>
        </div>
        <div className="order-1 bg-white/70 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
            <p className="text-sm leading-snug tracking-wide text-stone-gray">{description}</p>
        </div>
    </div>
);

const ValueCard: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white/60 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-burnt-orange w-12 h-12 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-stone-gray">{description}</p>
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <div className="bg-ivory/20 pb-20">
            <div className="pt-24 pb-12 text-center">
                 <AnimatedSection>
                    <h1 className="text-5xl font-extrabold text-white">Rainbow: Rooted in Science, Growing a Verdant Future</h1>
                    <p className="mt-4 text-lg text-ivory max-w-3xl mx-auto">
                        At Rainbow, we believe farming is more than cultivation—it’s about nurturing life, empowering farmers, and regenerating the planet. With over a decade of expertise, we are shaping the future of eco-friendly, technology-driven agriculture that benefits both farmers and ecosystems.
                    </p>
                </AnimatedSection>
            </div>

            {/* Mission & Vision Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                    <div className="bg-white/50 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-cerulean-blue mb-4">Our Mission</h2>
                        <p className="text-stone-gray">To revolutionize farming through nanotechnology-powered organic solutions that balance productivity, profitability, and sustainability.</p>
                    </div>
                     <div className="bg-white/50 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-cerulean-blue mb-4">Our Vision</h2>
                        <p className="text-stone-gray">To be the world’s most trusted name in sustainable agriculture, where innovation drives verdant growth.</p>
                    </div>
                </AnimatedSection>
            </div>
            
            {/* Values Section */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                 <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Values</h2>
                </AnimatedSection>
                <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard title="Innovation" description="Leading in nanotechnology and organic inputs." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>} />
                    <ValueCard title="Sustainability" description="Improving soil health while protecting ecosystems." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>} />
                    <ValueCard title="Integrity" description="Ethical practices farmers can trust." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                    <ValueCard title="Community" description="Farmer-first, solution-driven approach." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>} />
                </AnimatedSection>
             </div>

            {/* Timeline Section */}
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-cerulean-blue h-full border" style={{left: '50%'}}></div>
                <AnimatedSection>
                    <TimelineItem 
                        year="2010"
                        title="Established"
                        description="Rainbow was established with a mission to transform farming practices for the better."
                        align="left"
                    />
                </AnimatedSection>
                 <AnimatedSection>
                    <TimelineItem 
                        year="2015"
                        title="Organic Expansion"
                        description="Expanded into certified organic product lines, cementing our commitment to sustainable agriculture."
                        align="right"
                    />
                </AnimatedSection>
                 <AnimatedSection>
                    <TimelineItem 
                        year="2020"
                        title="Scientific Partnerships"
                        description="Partnered with leading scientists and research labs to accelerate innovation in nanotechnology for agriculture."
                        align="left"
                    />
                </AnimatedSection>
                 <AnimatedSection>
                    <TimelineItem 
                        year="Today"
                        title="Global Impact"
                        description="Serving clients across India and expanding into global markets, driving a worldwide shift to sustainable farming."
                        align="right"
                    />
                </AnimatedSection>
            </div>
            
            <AnimatedSection className="text-center max-w-3xl mx-auto px-4 mt-12">
                <p className="text-xl italic text-stone-gray">From a spectrum of innovation to vibrant growth, every step we take is for the farmer, the soil, and a sustainable future.</p>
                 <div className="mt-8">
                    <Link to="/contact" className="bg-burnt-orange text-white font-bold py-3 px-8 rounded-full hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg">
                      Meet Our Team
                    </Link>
                </div>
            </AnimatedSection>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                 <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">Meet Our Leaders</h2>
                    <p className="mt-4 text-lg text-stone-gray max-w-3xl mx-auto">
                        Driven by a shared purpose, our leadership team combines deep scientific expertise with a commitment to farmer success.
                    </p>
                </AnimatedSection>
                 <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <TeamMemberCard name="Dr. Alisha Chen" title="Founder & CEO" imageUrl="https://picsum.photos/400/600?random=1" />
                    <TeamMemberCard name="Ben Carter" title="Chief Technology Officer" imageUrl="https://picsum.photos/400/600?random=2" />
                    <TeamMemberCard name="Sofia Reyes" title="Head of Global Operations" imageUrl="https://picsum.photos/400/600?random=3" />
                </AnimatedSection>
            </div>
        </div>
    );
}

export default AboutPage;