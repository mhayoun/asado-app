import React from 'react';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { mainDishes } from '../../data';

export const MainStep = ({ logic }) => {
  const { t, i18n, selectedMain, setSelectedMain, setCurrentStep } = logic;
  const isRTL = i18n.language === 'he';

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-500">
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

      <div className="text-center mt-12 pt-8 border-t flex justify-center gap-4">
         <button
           onClick={() => setCurrentStep('salads')}
           className="px-8 py-4 rounded-full font-bold text-slate-500 hover:bg-slate-50 flex items-center gap-2"
         >
           <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
           {t('back', 'חזרה')}
         </button>

         <button
          onClick={() => setCurrentStep('extras')}
          disabled={!selectedMain}
          className="bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-800 transition-all disabled:opacity-50 flex items-center gap-2"
         >
          {t('next_step_2', 'לשלב הבא')}
          <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
         </button>
      </div>
    </div>
  );
};