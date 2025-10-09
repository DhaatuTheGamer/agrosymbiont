import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '');
            setFormData(prevState => ({ ...prevState, phone: numericValue }));
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
        if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
        if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
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
        console.log('Form data submitted:', formData);
        setIsSubmitted(true);
    };

    return (
        <div className="bg-ivory/20 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-5xl font-extrabold text-white">Get in Touch</h1>
                    <p className="mt-4 text-lg text-ivory max-w-3xl mx-auto">
                        Have a question or a project in mind? We'd love to hear from you. Reach out to us, and let's cultivate the future together.
                    </p>
                </AnimatedSection>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <AnimatedSection>
                        {isSubmitted ? (
                            <div className="bg-white/70 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center h-full text-center">
                                <h2 className="text-2xl font-bold text-cerulean-blue">Thank You!</h2>
                                <p className="mt-2 text-stone-gray">Your message has been sent successfully. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form noValidate onSubmit={handleSubmit} className="bg-white/70 p-8 rounded-lg shadow-lg space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-gray">Full Name <span className="text-burnt-orange">*</span></label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`} />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-gray">Email Address <span className="text-burnt-orange">*</span></label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`} />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>
                                 <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-stone-gray">Phone Number (With Country Code) <span className="text-burnt-orange">*</span></label>
                                    <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} pattern="[0-9]*" title="Please enter only numeric digits." className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`} />
                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="inquiryType" className="block text-sm font-medium text-stone-gray">Inquiry Type <span className="text-burnt-orange">*</span></label>
                                    <select id="inquiryType" name="inquiryType" required value={formData.inquiryType} onChange={handleChange} className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border focus:outline-none sm:text-sm rounded-md ${errors.inquiryType ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`}>
                                        <option value="">Please select</option>
                                        <option value="General">General Inquiry</option>
                                        <option value="Sales">Sales & Partnership</option>
                                        <option value="Support">Technical Support</option>
                                        <option value="Careers">Careers</option>
                                    </select>
                                    {errors.inquiryType && <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-stone-gray">Message <span className="text-burnt-orange">*</span></label>
                                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-cerulean-blue focus:border-cerulean-blue'}`}></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-burnt-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 transform hover:scale-105 shadow-lg">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </AnimatedSection>
                     <AnimatedSection>
                        <div className="space-y-8">
                             <div className="bg-white/70 p-8 rounded-lg shadow-lg">
                                 <h3 className="text-xl font-bold text-gray-800 mb-2">Company Information</h3>
                                 <p className="text-stone-gray"><strong>Company Name:</strong> Rainbow</p>
                                 <p className="text-stone-gray"><strong>Phone:</strong> +1 (555) 123-4567</p>
                                 <p className="text-stone-gray"><strong>Email:</strong> contact@rainbowagri.com</p>
                                 <p className="text-stone-gray"><strong>Address:</strong> 123 AgriTech Ave, Davis, CA 95616, USA</p>
                             </div>
                             <div className="h-80 rounded-lg shadow-lg overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.223591605374!2d-121.743388784659!3d38.559530979624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529cf1b4408ab%3A0x5a6a3b2f2b4c19a0!2sUniversity%20of%20California%2C%20Davis!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false}
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Rainbow Headquarters Location"
                                ></iframe>
                             </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;