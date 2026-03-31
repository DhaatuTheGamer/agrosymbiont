import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import JobApplicationForm from './JobApplicationForm';
import { Job } from '../data/careers';
import JobBadge from './JobBadge';

interface JobModalProps {
    job: Job | null;
    onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = React.memo(({ job, onClose }) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {job && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white dark:bg-stone-800 rounded-[2rem] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t(job.titleKey)}</h2>
                                <div className="flex gap-3 text-sm text-stone-500 dark:text-stone-400">
                                    <JobBadge icon="📍" text={t(job.locationKey)} />
                                    <JobBadge icon="💼" text={t(job.typeKey)} />
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-stone-400 hover:text-gray-900 dark:text-stone-500 dark:hover:text-white transition-colors p-2 bg-stone-100 dark:bg-stone-700/50 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700"
                                aria-label={t('car_close')}
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mb-8 text-stone-600 dark:text-stone-300 bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                            <p>{t('car_modal_desc', { title: t(job.titleKey) })}</p>
                        </div>

                        <JobApplicationForm jobId={job.id} jobTitle={t(job.titleKey)} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default JobModal;