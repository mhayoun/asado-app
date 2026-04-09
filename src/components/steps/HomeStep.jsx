// src/components/steps/HomeStep.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HomeStep = ({ onStart, t, lang }) => {
  const isRTL = lang === 'he';

  return (
    /* min-h-[85vh] ensures the container takes up almost the full screen height.
       justify-end pushes the content to the very bottom.
       pb-6 provides a small gap so it doesn't touch the navigation bar/screen edge.
    */
    <div className="flex flex-col justify-end md:justify-center min-h-[85vh] pb-6 md:pb-0">
      <div className="text-center bg-white/95 p-5 md:p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm max-w-xl mx-auto transform transition-all hover:scale-105">

        {/* Title: Compact margin for mobile */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-950 mb-3 md:mb-6">
          {t('start_building')}
        </h2>

        {/* Description: Hidden on mobile, shown on desktop */}
        <p className="hidden md:block text-lg text-amber-900/80 mb-8 font-light">
          {t('home_description')}
        </p>

        {/* Button: Smaller py-3 for mobile to minimize card height further */}
        <button
          onClick={onStart}
          className="bg-amber-700 text-white px-10 py-3 md:px-12 md:py-4 rounded-full font-bold text-lg md:text-xl hover:bg-amber-800 transition-all flex items-center gap-3 mx-auto shadow-lg"
        >
          {t('start_now')}
          <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};