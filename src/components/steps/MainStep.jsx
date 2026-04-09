import React, { useEffect, useRef } from 'react'; // Added hooks
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { mainDishes } from '../../data';

export const MainStep = ({ logic }) => {
  const { t, i18n, selectedMain, setSelectedMain, setCurrentStep } = logic;
  const isRTL = i18n.language === 'he';

  const bottomRef = useRef(null); // Reference for the bottom buttons

  // 1. Scroll to top on arrival
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 2. Scroll to bottom when a main dish is selected
  useEffect(() => {
    if (selectedMain && bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [selectedMain]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-500 mb-10">
      <h2 className="text-3xl font-black text-slate-900 mb-8 border-b pb-6 text-start">
        {t('mains', 'מנות עיקריות')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainDishes.map((main) => (
          <div
            key={main.id}
            onClick={() => setSelectedMain(main.id)}
            className={`group cursor-pointer rounded-3xl overflow-hidden border-2 transition-all ${
              selectedMain === main.id ? 'border-amber-600 ring-4 ring-amber-50' : 'border-slate-100'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={main.image}
                alt={t(main.nameKey)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {selectedMain === main.id && (
                <div className="absolute inset-0 bg-amber-900/20 flex items-center justify-center">
                  <CheckCircle size={48} className="text-white drop-shadow-lg" />
                </div>
              )}
            </div>

            <div className={`p-6 bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="font-bold text-xl text-slate-900 mb-2">
                {t(main.nameKey)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(main.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Added Ref here to trigger the "Go Down" behavior */}
      <div
        ref={bottomRef}
        className="text-center mt-12 pt-8 border-t flex justify-center gap-4 min-h-[100px]"
      >
         <button
           onClick={() => setCurrentStep('salads')}
           className="px-8 py-4 rounded-full font-bold text-slate-500 hover:bg-slate-50 flex items-center gap-2"
         >
           <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
           {t('back', 'חזרה')}
         </button>

         {/* Only show/emphasize button when selected */}
         <button
          onClick={() => setCurrentStep('extras')}
          disabled={!selectedMain}
          className={`bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-800 transition-all flex items-center gap-2 ${
            !selectedMain ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-in zoom-in duration-300'
          }`}
         >
          {t('next_step_2', 'לשלב הבא')}
          <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
         </button>
      </div>
    </div>
  );
};