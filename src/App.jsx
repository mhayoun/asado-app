import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, CheckCircle, ShoppingBag } from 'lucide-react';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [selectedSalads, setSelectedSalads] = useState([]);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="p-4 bg-white/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-black text-amber-900">ASADO</div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button onClick={() => i18n.changeLanguage('he')} className="text-xs font-bold">HE</button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-xs font-bold">EN</button>
            <button onClick={() => i18n.changeLanguage('fr')} className="text-xs font-bold">FR</button>
          </div>
          <ShoppingBag className="text-slate-600" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000"
            className="w-full h-full object-cover opacity-50"
            alt="Shabbat Table"
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 drop-shadow-md">{t('welcome')}</h1>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
            <p className="text-lg mb-6">{t('cta')}</p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105">
              {t('salad_limit', { count: selectedSalads.length })}
            </button>
          </div>
        </div>
      </header>

      {/* Pricing Toggle */}
      <section className="max-w-md mx-auto -mt-10 relative z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 text-center">
        <p className="text-slate-600 mb-4">{t('upsell')}</p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className="text-sm font-bold text-slate-400">{t('package_base')}</span>
          <button
            onClick={() => setIsPremium(!isPremium)}
            className={`w-12 h-6 rounded-full transition-colors ${isPremium ? 'bg-green-500' : 'bg-slate-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full transition-transform mx-1 ${isPremium ? (i18n.language === 'he' ? '-translate-x-6' : 'translate-x-6') : ''}`} />
          </button>
          <span className="text-sm font-bold text-slate-400">{t('package_all')}</span>
        </div>
        <div className="text-4xl font-black text-slate-900">
          {isPremium ? "189" : "169"}<span className="text-lg ml-1">₪</span>
        </div>
      </section>

      {/* Trust & Certifications Footer */}
      <footer className="mt-20 py-12 bg-slate-900 text-slate-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-bold uppercase tracking-widest text-slate-500">
             <span>{t('kashrut')}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
            <a href="tel:0527977394" className="flex items-center justify-center gap-2"><Phone size={18} /> 052-7977394</a>
            <a href="mailto:asadok100@gmail.com" className="flex items-center justify-center gap-2"><Mail size={18} /> asadok100@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;