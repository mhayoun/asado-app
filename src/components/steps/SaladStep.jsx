import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { initialSalads } from '../../data';

export const SaladStep = ({ logic }) => {
  const { t, i18n, selectedSalads, toggleSalad, SALAD_LIMIT, setCurrentStep } = logic;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8 border-b pb-6">
        <h2 className="text-3xl font-black text-slate-900">{t('salads')}</h2>
        <div className={`text-lg font-bold p-3 px-6 rounded-full ${selectedSalads.length === SALAD_LIMIT ? 'bg-green-100 text-green-900' : 'bg-slate-100 text-slate-700'}`}>
          {selectedSalads.length} / {SALAD_LIMIT} {t('selected')}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {initialSalads.map((salad) => (
          <div
            key={salad.id}
            onClick={() => toggleSalad(salad.id)}
            className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 group ${selectedSalads.includes(salad.id) ? 'border-amber-600 bg-amber-50 shadow-md' : 'border-slate-200 bg-white hover:border-amber-300'}`}
          >
            <img src={salad.image} alt={salad.name} className="w-16 h-16 object-cover rounded-xl shadow-sm group-hover:scale-110 transition-transform" />
            <p className="font-bold text-slate-950">{t(salad.translationKey || salad.name)}</p>
            {selectedSalads.includes(salad.id) && <CheckCircle className="absolute top-2 right-2 w-6 h-6 text-amber-700 bg-white rounded-full p-0.5 shadow-sm" />}
          </div>
        ))}
      </div>

      <div className="text-center mt-12 pt-8 border-t">
        <button
          onClick={() => setCurrentStep('mains')}
          disabled={selectedSalads.length !== SALAD_LIMIT}
          className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all disabled:opacity-50 mx-auto flex items-center gap-3"
        >
          {t('next_step')} <ArrowRight size={18} className={i18n.language === 'he' ? 'rotate-180' : ''} />
        </button>
      </div>
    </div>
  );
};