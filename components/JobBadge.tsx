import React from 'react';

interface JobBadgeProps {
    icon: string;
    text: string;
    className?: string;
}

const JobBadge: React.FC<JobBadgeProps> = React.memo(({ icon, text, className = '' }) => {
    return (
        <span className={`flex items-center bg-stone-50 dark:bg-stone-900/50 px-3 py-1 rounded-full border border-stone-100 dark:border-stone-700 ${className}`.trim()}>
            <span className="mr-2 text-lg">{icon}</span> {text}
        </span>
    );
});

export default JobBadge;
