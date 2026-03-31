import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormErrorSummaryProps {
    errors: { [key: string]: string };
    headerText: string;
}

const FormErrorSummary: React.FC<FormErrorSummaryProps> = ({ errors, headerText }) => {
    if (Object.keys(errors).length === 0) return null;

    return (
        <div role="alert" className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0" strokeWidth={2} />
            <div>
                <h4 className="text-red-800 dark:text-red-300 font-bold text-sm mb-1">{headerText}</h4>
                <ul className="list-disc list-inside text-red-600 dark:text-red-400 text-sm">
                    {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FormErrorSummary;
