import React from 'react';
import { CheckCircle, Utensils } from 'lucide-react';

export const SummaryBar = ({ logic }) => {
  const { t, i18n, selectedSalads, SALAD_LIMIT, selectedMain, totalPrice } = logic;

  const isRTL = i18n.language === 'he';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 p-4 z-40 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]">
      <div className={`max-w-6xl mx-auto flex justify-between items-center ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>

        {/* Price Section - Always in Shekels */}
        <div className={`text-xl font-black text-amber-950 flex items-center gap-1 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
          <span className="text-sm font-normal text-slate-500">
            {isRTL ? ` / ${t('per_person')}` : `${t('per_person')} / `}
          </span>
          <span dir="ltr">{totalPrice} ₪</span>
        </div>

        {/* Status Section */}
        <div className={`flex gap-6 md:gap-8 items-center text-sm font-medium ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Main Dish Status */}
          <div className="flex items-center gap-2">
            <Utensils
              size={16}
              className={selectedMain ? "text-green-600" : "text-slate-300"}
            />
            <span>
              {selectedMain ? t('main_selected') : t('select_main')}
            </span>
          </div>

          {/* Salads Status */}
          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className={selectedSalads.length === SALAD_LIMIT ? "text-green-600" : "text-slate-300"}
            />
            <span dir="ltr">
              {selectedSalads.length}/{SALAD_LIMIT}
            </span>
            <span>{t('salads_selected')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};