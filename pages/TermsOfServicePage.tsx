
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-ivory/20 py-20 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-cerulean-blue text-center mb-8">Terms of Service</h1>
          <div className="bg-white/70 p-8 rounded-lg shadow-lg space-y-6">
            <p className="text-sm text-stone-gray">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold text-gray-800">1. Introduction</h2>
            <p>These Terms of Service ("Terms") govern your use of the Rainbow website (the "Site"). By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">2. Use of Our Website</h2>
            <p>You agree to use the Site only for lawful purposes. You are prohibited from any use of the Site that would constitute an illegal offense, give rise to liability, or otherwise violate any applicable local, state, national, or international law or regulation.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">3. Intellectual Property</h2>
            <p>The Site and its original content, features, and functionality are and will remain the exclusive property of Rainbow and its licensors. The content is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Rainbow.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">4. User Conduct</h2>
            <p>You agree not to use the Site to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Upload, post, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable.</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
              <li>Interfere with or disrupt the Site or servers or networks connected to the Site.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800">5. Disclaimers</h2>
            <p>The information on our Site is provided on an "as is," "as available" basis. You agree that your use of our Site is at your sole risk. We disclaim all warranties of any kind, including but not limited to any express warranties, statutory warranties, and any implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">6. Limitation of Liability</h2>
            <p>In no event shall Rainbow, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">7. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">8. Changes to These Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Rainbow<br />
              123 AgriTech Ave, Davis, CA 95616, USA<br />
              Email: contact@rainbowagri.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
