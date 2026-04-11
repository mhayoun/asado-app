import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, X, ZoomIn } from 'lucide-react';
import { initialSalads } from '../../data';

export const SaladStep = ({ logic }) => {
  const { t, i18n, selectedSalads, toggleSalad, SALAD_LIMIT, setCurrentStep } = logic;
  const [fullscreenImage, setFullscreenImage] = useState(null); // Track which image is full screen

  const isComplete = selectedSalads.length === SALAD_LIMIT;
  const isRTL = i18n.language === 'he';
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isComplete && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isComplete]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in fade-in duration-500 mb-10">

      {/* --- MODAL / FULLSCREEN VIEW --- */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setFullscreenImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors">
            <X size={40} />
          </button>
          <img
            src={fullscreenImage.image}
            alt={fullscreenImage.name}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
          />
          <p className="absolute bottom-10 text-white text-2xl font-bold">
            {t(fullscreenImage.translationKey || fullscreenImage.name)}
          </p>
        </div>
      )}

      {/* Header */}
      <div className={`flex flex-col sm:flex-row justify-between items-center mb-8 border-b pb-6 gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
        <h2 className="text-3xl font-black text-slate-900">{t('salads')}</h2>
        <div className={`text-lg font-bold p-3 px-6 rounded-full transition-colors duration-300 ${isComplete ? 'bg-green-100 text-green-900' : 'bg-amber-50 text-amber-700'}`}>
          {selectedSalads.length} / {SALAD_LIMIT} {t('selected')}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {initialSalads.map((salad) => {
          const isSelected = selectedSalads.some(s => s.id === salad.id);

          return (
            <div
              key={salad.id}
              onClick={() => toggleSalad(salad)}
              className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 group hover:shadow-md ${
                isSelected ? 'border-amber-600 bg-amber-50 shadow-inner' : 'border-slate-100 bg-white hover:border-amber-300'
              }`}
            >
              <div className="relative shrink-0">
                {/* Image with Zoom Overlay */}
                <div className="relative overflow-hidden rounded-xl">
                  <img src={salad.image} alt={salad.name} className="w-16 h-16 object-cover shadow-sm group-hover:scale-110 transition-transform duration-300" />
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent toggling selection when clicking zoom
                      setFullscreenImage(salad);
                    }}
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                  >
                    <ZoomIn className="text-white" size={20} />
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-0.5 shadow-lg border-2 border-white z-10">
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
        </div>
      </div>
    </div>
  );
};