
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TiltCard from '../components/TiltCard';
import JobCard from '../components/JobCard';
import JobApplicationForm from '../components/JobApplicationForm';
import JobModal from '../components/JobModal';
import { jobOpenings, benefits, jobCategories, JobCategory, Job } from '../data/careers';

const CareersPage: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<JobCategory>('all');
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const applicationFormRef = useRef<HTMLDivElement>(null);

    const handleApplyClick = useCallback((job?: Job) => {
        if (job) {
            setSelectedJob(job);
        } else {
            applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedJob(null);
    }, []);

    const filteredJobs = useMemo(() => jobOpenings.filter(job => activeTab === 'all' || job.category === activeTab), [activeTab]);

    return (
         <div className="py-20">
            <JobModal job={selectedJob} onClose={handleCloseModal} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-20">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">{t('car_title')}</h1>
                    <p className="text-xl text-stone-gray dark:text-stone-300 max-w-3xl mx-auto font-light">
                        {t('car_subtitle')}
                    </p>
                </AnimatedSection>

                {/* Benefits Section */}
                <AnimatedSection className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <TiltCard key={benefit.id}>
                                <div className="bg-white/70 dark:bg-stone-800/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 dark:border-stone-700/50 h-full group hover:bg-white dark:hover:bg-stone-800 transition-all duration-300">
                                    <div className="text-cerulean-blue dark:text-blue-400 w-12 h-12 mb-6 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:bg-cerulean-blue dark:group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Sparkles className="w-full h-full" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t(benefit.titleKey)}</h3>
                                    <p className="text-stone-gray dark:text-stone-400 text-sm leading-relaxed">{t(benefit.descriptionKey)}</p>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </AnimatedSection>
                
                <AnimatedSection className="mt-12 mb-16">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {jobCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === cat.id ? 'bg-cerulean-blue text-white shadow-lg' : 'bg-stone-100 dark:bg-stone-800 text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700'}`}
                            >
                                {t(cat.labelKey)}
                            </button>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 px-2">{t('car_openings')}</h2>
                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <JobCard
                                    key={job.id}
                                    title={t(job.titleKey)}
                                    location={t(job.locationKey)}
                                    type={t(job.typeKey)}
                                    onApply={handleApplyClick}
                                    job={job}
                                />
                            ))
                        ) : (
                            <div className="text-center py-12 bg-stone-50 dark:bg-stone-900/30 rounded-3xl border border-dashed border-stone-200 dark:border-stone-700">
                                <p className="text-stone-500 dark:text-stone-400 italic">{t('car_more_soon')}</p>
                            </div>
                        )}
                    </div>
                    {filteredJobs.length > 0 && (
                        <div className="text-center mt-8">
                            <p className="text-stone-400 dark:text-stone-500 italic">{t('car_more_soon')}</p>
                        </div>
                    )}
                </AnimatedSection>

                <AnimatedSection className="mt-24">
                     <div ref={applicationFormRef} className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-stone-700 max-w-3xl mx-auto scroll-mt-32">
                         <div className="text-center mb-12">
                             <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('car_gen_app_title')}</h2>
                             <p className="text-stone-gray dark:text-stone-400 mt-3 text-lg font-light">{t('car_gen_app_subtitle')}</p>
                         </div>
                         
                         <JobApplicationForm />
                    </div>
                </AnimatedSection>
            </div>
         </div>
    );
};

export default CareersPage;
