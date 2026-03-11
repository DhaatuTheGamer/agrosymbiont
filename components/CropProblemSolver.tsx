import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wheat, Apple, Coffee, Sprout, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type CropType = 'wheat' | 'apple' | 'coffee' | 'vegetables' | null;
type SymptomType = 'yellow_leaves' | 'stunted_growth' | 'low_yield' | 'pests' | null;

const cropOptions = [
  { id: 'wheat' as CropType, label: 'Cereals', icon: <Wheat className="w-6 h-6" /> },
  { id: 'apple' as CropType, label: 'Fruits', icon: <Apple className="w-6 h-6" /> },
  { id: 'coffee' as CropType, label: 'Cash Crops', icon: <Coffee className="w-6 h-6" /> },
  { id: 'vegetables' as CropType, label: 'Vegetables', icon: <Sprout className="w-6 h-6" /> },
];

const symptomOptions = {
    wheat: [
        { id: 'yellow_leaves', label: 'Yellowing Leaves' },
        { id: 'low_yield', label: 'Below Average Yield' },
        { id: 'pests', label: 'Aphid/Rust Infestation' }
    ],
    apple: [
        { id: 'stunted_growth', label: 'Stunted Growth' },
        { id: 'low_yield', label: 'Small Fruit Size' },
        { id: 'pests', label: 'Scab or Mites' }
    ],
    coffee: [
        { id: 'yellow_leaves', label: 'Nutrient Deficiency' },
        { id: 'low_yield', label: 'Berry Drop' },
        { id: 'pests', label: 'Berry Borer' }
    ],
    vegetables: [
        { id: 'stunted_growth', label: 'Poor Germination' },
        { id: 'yellow_leaves', label: 'Wilted or Yellow Leaves' },
        { id: 'pests', label: 'Whiteflies/Caterpillars' }
    ]
};

const solutions = {
    yellow_leaves: { name: 'Nano-N Master', desc: 'Foliar nitrogen boost with perfect targeted delivery to recover green color.' },
    stunted_growth: { name: 'RootStim Pro', desc: 'Phosphorus and zinc nano-particles for immediate root system expansion.' },
    low_yield: { name: 'YieldMax PK', desc: 'Optimized Potassium-Phosphate complex to boost fruiting and seed filling.' },
    pests: { name: 'BioGuard Armor', desc: 'Silica and organic oils formulation for enhanced natural plant resistance.' }
};

const CropProblemSolver: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCrop, setSelectedCrop] = useState<CropType>(null);
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomType>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleDiagnose = () => {
    if (!selectedCrop || !selectedSymptom) return;
    setIsAnalyzing(true);
    setShowResult(false);
    setTimeout(() => {
        setIsAnalyzing(false);
        setShowResult(true);
    }, 1200);
  };

  const currentSymptoms = selectedCrop ? symptomOptions[selectedCrop] : [];
  const recommendedSolution = selectedSymptom ? solutions[selectedSymptom] : null;

  return (
    <div className="bg-white dark:bg-stone-800 rounded-3xl shadow-xl border border-stone-100 dark:border-stone-700 p-6 sm:p-8 w-full max-w-4xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cerulean-blue/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Interactive Diagnostics</h2>
        <p className="text-stone-500 dark:text-stone-400">Select your crop and symptoms to get an instant nano-agronomy recommendation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">1. Select Crop Type</label>
                <div className="grid grid-cols-2 gap-3">
                    {cropOptions.map((crop) => (
                        <button
                            key={crop.id}
                            onClick={() => {
                                setSelectedCrop(crop.id);
                                setSelectedSymptom(null);
                                setShowResult(false);
                            }}
                            className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${selectedCrop === crop.id ? 'bg-blue-50 dark:bg-blue-900/20 border-cerulean-blue text-cerulean-blue dark:text-blue-400 shadow-md' : 'bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-stone-800'}`}
                        >
                            {crop.icon} <span className="font-semibold text-sm">{crop.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCrop && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 mt-4">2. Observed Symptoms</label>
                        <div className="flex flex-col gap-2">
                            {currentSymptoms.map((symptom) => (
                                <button
                                    key={symptom.id}
                                    onClick={() => {
                                        setSelectedSymptom(symptom.id as SymptomType);
                                        setShowResult(false);
                                    }}
                                    className={`text-left p-3 rounded-xl border transition-all ${selectedSymptom === symptom.id ? 'bg-orange-50 dark:bg-orange-900/20 border-burnt-orange text-burnt-orange dark:text-orange-400 shadow-md' : 'bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-white dark:hover:bg-stone-800'}`}
                                >
                                    <span className="font-semibold text-sm">{symptom.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {selectedSymptom && !showResult && !isAnalyzing && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4">
                        <button 
                            onClick={handleDiagnose}
                            className="w-full bg-cerulean-blue text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Search className="w-5 h-5" /> Analyze Problem
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        <div className="bg-stone-50 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 p-6 flex flex-col items-center justify-center min-h-[300px] text-center relative overflow-hidden">
            {isAnalyzing ? (
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-cerulean-blue/30 border-t-cerulean-blue rounded-full animate-spin"></div>
                    <p className="text-stone-500 font-medium animate-pulse">Running diagnostic algorithms...</p>
                </div>
            ) : showResult && recommendedSolution ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-2">Recommended Solution</h3>
                    <h4 className="text-2xl font-black text-cerulean-blue dark:text-blue-400 mb-4">{recommendedSolution.name}</h4>
                    <p className="text-stone-600 dark:text-stone-300 mb-6 max-w-sm">{recommendedSolution.desc}</p>
                    <button className="bg-mustard-yellow text-stone-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors shadow-md flex items-center gap-2">
                        View Product <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            ) : (
                <div className="text-stone-400 dark:text-stone-500 flex flex-col items-center gap-3">
                    <Search className="w-12 h-12 opacity-50" />
                    <p>Select your crop and symptoms to view recommendations.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CropProblemSolver;
