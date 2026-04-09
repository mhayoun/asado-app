import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export const SummaryStep = ({ logic }) => {
  const { t, i18n, selectedSalads, selectedMain, isPremiumPackage, totalPrice, setCurrentStep } = logic;

  return (
    <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
      <div className="text-center mb-8">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="text-green-600" size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-900">{t('order_summary', 'סיכום הזמנה')}</h2>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-500">{t('salads')}</span>
          <span className="font-bold">{selectedSalads.length} {t('items')}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-500">{t('main_dish')}</span>
          <span className="font-bold">{selectedMain || '---'}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="text-slate-500">{t('package')}</span>
          <span className="font-bold">{isPremiumPackage ? t('premium') : t('basic')}</span>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl flex justify-between items-center mb-8">
        <span className="text-lg font-bold">{t('total_to_pay')}</span>
        <span className="text-3xl font-black text-amber-950">{totalPrice} ₪</span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Main Action Button */}
        <button className="w-full bg-amber-700 text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-800 transition-transform active:scale-95 shadow-xl">
          {t('confirm_and_pay', 'אישור ושליחה בוואטסאפ')}
        </button>

        {/* Back Button */}
        <button
          onClick={() => setCurrentStep('event')}
          className="flex items-center justify-center gap-2 text-slate-500 font-bold py-2 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={18} className={i18n?.language === 'he' ? 'rotate-180' : ''} />
          {t('back', 'חזרה')}
        </button>
      </div>
    </div>
  );
};