import React, { useState, useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';

interface JobCardProps {
    title: string;
    location: string;
    type: string;
    onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, onApply }) => (
    <div className="bg-white/70 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex justify-between items-center">
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-stone-gray mt-1">{location} • {type}</p>
        </div>
        <button 
            onClick={onApply}
            className="bg-cerulean-blue text-white font-semibold py-2 px-5 rounded-lg hover:bg-burnt-orange transition duration-300"
            aria-label={`Apply for ${title}`}
        >
            Apply
        </button>
    </div>
);

const CareersPage: React.FC = () => {
    const [formData, setFormData] = useState<{ name: string, email: string, resume: File | null }>({ name: '', email: '', resume: null });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const applicationFormRef = useRef<HTMLDivElement>(null);

    const handleApplyClick = () => {
        applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "resume" && files) {
            setFormData(prevState => ({ ...prevState, resume: files[0] }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };
    
    const validateForm = (): { [key: string]: string } => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.resume) newErrors.resume = 'Please upload your Resume/CV.';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setErrors({});
        console.log('Application submitted:', formData);
        setIsSubmitted(true);
    };

    return (
         <div className="bg-ivory/20 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-5xl font-extrabold text-white">Join Our Mission</h1>
                    <p className="mt-4 text-lg text-ivory max-w-3xl mx-auto">
                        We are looking for passionate innovators and problem-solvers to help us build a more sustainable future for agriculture. If you're ready to make an impact, we want to hear from you.
                    </p>
                </AnimatedSection>
                
                <AnimatedSection className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">Current Openings</h2>
                </AnimatedSection>

                <div className="mt-8 space-y-6">
                    <AnimatedSection>
                        <JobCard title="Lead Agronomist" location="Remote, USA" type="Full-time" onApply={handleApplyClick} />
                    </AnimatedSection>
                    <AnimatedSection>
                        <JobCard title="Biochemical Research Scientist" location="San Francisco, CA" type="Full-time" onApply={handleApplyClick} />
                    </AnimatedSection>
                    <AnimatedSection>
                        <JobCard title="Product Marketing Manager" location="San Francisco, CA" type="Full-time" onApply={handleApplyClick} />
                    </AnimatedSection>
                    <AnimatedSection>
                        <p className="text-center text-stone-gray pt-4">More roles coming soon...</p>
                    </AnimatedSection>
                </div>

                <AnimatedSection className="mt-20">
                     <div ref={applicationFormRef} className="bg-white/50 p-8 rounded-lg shadow-lg max-w-2xl mx-auto scroll-mt-20">
                         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">General Application</h2>
                         {isSubmitted ? (
                            <div className="text-center py-8">
                                <h3 className="text-2xl font-bold text-cerulean-blue">Application Received!</h3>
                                <p className="mt-2 text-stone-gray">Thank you for your interest in Rainbow. We've received your application and will be in touch if your profile matches our needs.</p>
                            </div>
                         ) : (
                            <form noValidate onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-gray">Full Name</label>
                                    <input type="text" name="name" id="name" required onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`} />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-gray">Email Address</label>
                                    <input type="email" name="email" id="email" required onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`} />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-stone-gray">Resume/CV</label>
                                    <input type="file" name="resume" id="resume" required onChange={handleChange} className="mt-1 block w-full text-sm text-stone-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cerulean-blue/10 file:text-cerulean-blue hover:file:bg-cerulean-blue/20" />
                                    {errors.resume && <p className="mt-1 text-sm text-red-600">{errors.resume}</p>}
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-burnt-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg">
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                         )}
                    </div>
                </AnimatedSection>
            </div>
         </div>
    );
};

export default CareersPage;