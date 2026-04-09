// src/components/steps/HomeStep.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react'; // <--- Add this line

export const HomeStep = ({ onStart, t, lang }) => (
  <div className="text-center bg-white/90 p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm max-w-xl mx-auto transform transition-all hover:scale-105">
    <h2 className="text-3xl font-extrabold text-amber-950 mb-6">{t('start_building')}</h2>
    <p className="text-lg text-amber-900/80 mb-8 font-light">{t('home_description')}</p>
    <button
      onClick={onStart}
      className="bg-amber-700 text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-amber-800 transition-all flex items-center gap-3 mx-auto shadow-lg"
    >
      {t('start_now')}
      <ArrowRight className={`w-5 h-5 ${lang === 'he' ? 'rotate-180' : ''}`} />
    </button>
  </div>
);