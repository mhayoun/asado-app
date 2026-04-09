import React, { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { initialSalads } from '../../data';

export const SaladStep = ({ logic }) => {
  const { t, i18n, selectedSalads, toggleSalad, SALAD_LIMIT, setCurrentStep } = logic;
  const isComplete = selectedSalads.length === SALAD_LIMIT;
  const isRTL = i18n.language === 'he';

  const buttonRef = useRef(null);

  // Scroll to button when selection is finished
  useEffect(() => {
    if (isComplete && buttonRef.current) {
      buttonRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [isComplete]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in fade-in duration-500 mb-10">
      <div className={`flex flex-col sm:flex-row justify-between items-center mb-8 border-b pb-6 gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
        <h2 className="text-3xl font-black text-slate-900">{t('salads')}</h2>
        <div className={`text-lg font-bold p-3 px-6 rounded-full transition-colors duration-300 ${isComplete ? 'bg-green-100 text-green-900' : 'bg-amber-50 text-amber-700'}`}>
          {selectedSalads.length} / {SALAD_LIMIT} {t('selected')}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {initialSalads.map((salad) => {
          // CHECK: Use .some() because selectedSalads contains objects, not just strings
          const isSelected = selectedSalads.some(s => s.id === salad.id);

          return (
            <div
              key={salad.id}
              onClick={() => toggleSalad(salad)} // FIX: Pass the WHOLE object
              className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 group hover:shadow-md ${
                isSelected
                ? 'border-amber-600 bg-amber-50 shadow-inner'
                : 'border-slate-100 bg-white hover:border-amber-300'
              }`}
            >
              <div className="relative shrink-0">
                <img src={salad.image} alt={salad.name} className="w-16 h-16 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform" />
                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-0.5 shadow-lg border-2 border-white">
                    <CheckCircle size={20} />
                  </div>
                )}
              </div>

              <p className={`font-bold text-slate-950 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                {t(salad.translationKey || salad.name)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Button Section */}
      <div className="text-center mt-12 pt-8 border-t min-h-[140px]" ref={buttonRef}>
        <div className={`transition-all duration-500 ${isComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <button
            onClick={() => setCurrentStep('mains')}
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl flex items-center gap-3 mx-auto active:scale-95"
          >
            {t('next_step')}
            <ArrowRight size={22} className={isRTL ? 'rotate-180' : ''} />
          </button>
          <p className="text-amber-600 font-bold mt-4 text-sm animate-pulse">
            {isRTL ? 'נהדר! אפשר להמשיך למנה העיקרית' : 'Great! Ready for the main course'}
          </p>
        </div>
      </div>
    </div>
  );
};