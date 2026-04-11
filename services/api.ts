import { API_SIMULATION_DELAY } from '../utils/constants';

export interface JobApplicationData {
    name: string;
    email: string;
    linkedin: string;
    resume: File | null;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    inquiryType: string;
    message: string;
}

/**
 * Simulates a job application submission.
 */
export const submitJobApplication = async (data: JobApplicationData): Promise<{ success: boolean }> => {
    console.log('Submitting job application:', data.name);
    await new Promise(resolve => setTimeout(resolve, API_SIMULATION_DELAY));
    return { success: true };
};

/**
 * Simulates a waitlist form submission.
 */
export const submitWaitlistForm = async (email: string): Promise<{ success: boolean }> => {
    console.log('Submitting waitlist form:', email);
    await new Promise(resolve => setTimeout(resolve, API_SIMULATION_DELAY));
    return { success: true };
};

/**
 * Simulates a resource notification submission.
 */
export const submitResourceNotification = async (email: string): Promise<{ success: boolean }> => {
    console.log('Submitting resource notification:', email);
    await new Promise(resolve => setTimeout(resolve, API_SIMULATION_DELAY));
    return { success: true };
};

export interface InvestorContactFormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

/**
 * Simulates an investor contact form submission.
 */
export const submitInvestorContactForm = async (data: InvestorContactFormData): Promise<{ success: boolean }> => {
    console.log('Submitting investor contact form:', data.email);
    await new Promise(resolve => setTimeout(resolve, API_SIMULATION_DELAY));
    return { success: true };
};

/**
 * Simulates a contact form submission.
 */
export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean }> => {
    console.log('Submitting contact form:', data.email);
    await new Promise(resolve => setTimeout(resolve, API_SIMULATION_DELAY));
    return { success: true };
};
