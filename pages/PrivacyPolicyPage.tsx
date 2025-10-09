
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-ivory/20 py-20 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-cerulean-blue text-center mb-8">Privacy Policy</h1>
          <div className="bg-white/70 p-8 rounded-lg shadow-lg space-y-6">
            <p className="text-sm text-stone-gray">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-bold text-gray-800">1. Introduction</h2>
            <p>Welcome to Rainbow ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

            <h2 className="text-2xl font-bold text-gray-800">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you use our contact or career forms.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800">3. How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Respond to your inquiries and support requests.</li>
              <li>Process your application for employment.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Send you newsletters or other information about our company, with your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800">4. Information Sharing</h2>
            <p>We do not share your personal information with third parties except as described in this Privacy Policy. We may share your information with third-party service providers who perform services for us or on our behalf, such as web hosting, data analysis, and customer service. We will not sell your personal information to any third party.</p>

            <h2 className="text-2xl font-bold text-gray-800">5. Data Security</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
            
            <h2 className="text-2xl font-bold text-gray-800">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your personal information. To exercise these rights, please contact us using the contact information provided below.</p>

            <h2 className="text-2xl font-bold text-gray-800">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2 className="text-2xl font-bold text-gray-800">8. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicyPage;
