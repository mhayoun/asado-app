import React from 'react';
import { CheckCircle, Utensils } from 'lucide-react';

export const SummaryBar = ({ logic }) => {
  const { t, selectedSalads, SALAD_LIMIT, selectedMain, totalPrice } = logic;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 p-4 z-40 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className={selectedSalads.length === SALAD_LIMIT ? "text-green-600" : "text-slate-300"}
            />
            <span>{selectedSalads.length}/{SALAD_LIMIT} {t('salads')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils
              size={16}
              className={selectedMain ? "text-green-600" : "text-slate-300"}
            />
            <span>
              {selectedMain ? t('main_selected', 'מנה עיקרית נבחרה') : t('select_main', 'בחרו עיקרית')}
            </span>
          </div>
        </div>
        <div className="text-xl font-black text-amber-950">
          {totalPrice} ₪ <span className="text-xs font-normal text-slate-500">/{t('per_person', 'למנה')}</span>
        </div>
      </div>
    </div>
  );
};