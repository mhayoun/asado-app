import React from 'react';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';

export const ExtrasStep = ({ logic }) => {
  const { t, i18n, isPremiumPackage, setIsPremiumPackage, setCurrentStep } = logic;

  const isRTL = i18n?.language === 'he';

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in fade-in duration-500 text-center">
      <Star className="w-16 h-16 text-amber-500 mx-auto mb-6" fill="currentColor" />
      <h2 className="text-3xl font-black text-slate-900 mb-4">{t('upgrade_package')}</h2>
      <p className="text-slate-600 mb-10">{t('premium_promo')}</p>

      {/* Toggle Section */}
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-10 flex items-center justify-between gap-4">
        {/* Dynamic alignment based on language */}
        <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h3 className="text-xl font-bold text-slate-900">{t('premium_title')}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{t('premium_desc')}</p>
          <span className="inline-block mt-2 font-black text-amber-700">+20 ₪</span>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsPremiumPackage(!isPremiumPackage)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ring-2 ring-offset-2 shrink-0 ${
            isPremiumPackage ? 'bg-amber-600 ring-amber-600' : 'bg-slate-300 ring-transparent'
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              isPremiumPackage
                ? (isRTL ? '-translate-x-7' : 'translate-x-7')
                : (isRTL ? '-translate-x-1' : 'translate-x-1')
            }`}
          />
        </button>
      </div>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => setCurrentStep('mains')}
          className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
          {t('back')}
        </button>

        <button
          onClick={() => setCurrentStep('event')}
          className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all flex items-center gap-3 shadow-lg active:scale-95"
        >
          {t('view_summary')}
          <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
        </button>
      </div>
    </div>
  );
};