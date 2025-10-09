import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const BlogPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-ivory/30 py-20">
      <div>
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold text-gray-800">Insights & News</h1>
          <p className="mt-4 text-2xl text-burnt-orange font-semibold">Coming Soon</p>
          <p className="mt-2 text-lg text-stone-gray max-w-2xl mx-auto">
            Our team is preparing to share the latest news and insights on regenerative farming, AI in agriculture, and sustainability. Our blog will be your go-to source for the future of farming.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="bg-cerulean-blue/20 text-cerulean-blue font-semibold py-2 px-4 rounded-full">Regenerative Farming</span>
              <span className="bg-cerulean-blue/20 text-cerulean-blue font-semibold py-2 px-4 rounded-full">AI in Agri</span>
              <span className="bg-cerulean-blue/20 text-cerulean-blue font-semibold py-2 px-4 rounded-full">Sustainability</span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12 max-w-lg mx-auto">
          <div className="bg-white/60 p-8 rounded-lg shadow-lg">
            {isSubmitted ? (
              <div>
                <h3 className="text-2xl font-bold text-cerulean-blue">Thank You!</h3>
                <p className="mt-2 text-stone-gray">You're on the list! We'll notify you as soon as our blog goes live.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800">Be the First to Know</h3>
                <p className="mt-2 text-stone-gray mb-4">Sign up to get notified when we launch.</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cerulean-blue focus:border-cerulean-blue"
                    aria-label="Email for blog notifications"
                  />
                  <button
                    type="submit"
                    className="bg-burnt-orange text-white font-bold py-2 px-6 rounded-md hover:bg-mustard-yellow hover:text-cerulean-blue transition duration-300 shadow-md"
                  >
                    Notify Me
                  </button>
                </form>
              </>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPage;
