import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageSquare, ShoppingCart, CheckCircle, ArrowRight, Globe, ChevronDown, Utensils, Star } from 'lucide-react';
import { initialSalads, mainDishes } from './data';
import logo from '/logo.png';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [currentStep, setCurrentStep] = useState('home');
  const [selectedSalads, setSelectedSalads] = useState([]);
  const [selectedMain, setSelectedMain] = useState(null); // Added Main Dish state
  const [isPremiumPackage, setIsPremiumPackage] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const SALAD_LIMIT = 8;
  const BASE_PRICE = 169;
  const PREMIUM_ADDON = 20;

  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  useEffect(() => {
    const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleSalad = (id) => {
    setSelectedSalads((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length < SALAD_LIMIT) return [...prev, id];
      return prev;
    });
  };

  const totalPrice = isPremiumPackage ? BASE_PRICE + PREMIUM_ADDON : BASE_PRICE;

  const renderStep = () => {
    switch (currentStep) {
      case 'home':
        return (
          <div className="text-center bg-white/90 p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm max-w-xl mx-auto transform transition-all hover:scale-105">
            <h2 className="text-3xl font-extrabold text-amber-950 mb-6">{t('start_building')}</h2>
            <p className="text-lg text-amber-900/80 mb-8 font-light">{t('home_description')}</p>
            <button
              onClick={() => setCurrentStep('salads')}
              className="bg-amber-700 text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-amber-800 transition-all flex items-center gap-3 mx-auto shadow-lg"
            >
              {t('start_now')}
              <ArrowRight className={`w-5 h-5 ${i18n.language === 'he' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        );

      case 'salads':
        return (
          <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8 border-b pb-6">
              <h2 className="text-3xl font-black text-slate-900">{t('salads')}</h2>
              <div className={`text-lg font-bold p-3 px-6 rounded-full ${selectedSalads.length === SALAD_LIMIT ? 'bg-green-100 text-green-900' : 'bg-slate-100 text-slate-700'}`}>
                {selectedSalads.length} / {SALAD_LIMIT} {t('selected')}
              </div>
            </div>

            <div className="flex items-center justify-between p-5 mb-10 bg-amber-50 rounded-2xl border border-amber-200 shadow-inner">
              <div className="flex flex-col">
                <span className="font-semibold text-amber-950">{t('premium_toggle')}</span>
                <span className="text-xs text-amber-700">{t('premium_desc', 'כולל שתייה, סכו"ם ומשלוח')}</span>
              </div>
              <button
                onClick={() => setIsPremiumPackage(!isPremiumPackage)}
                className={`w-14 h-7 rounded-full transition-colors flex items-center ${isPremiumPackage ? 'bg-green-600' : 'bg-slate-300'}`}
              >
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transition-transform mx-1 ${isPremiumPackage ? (i18n.language === 'he' ? '-translate-x-8' : 'translate-x-8') : ''}`} />
              </button>
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

      case 'mains':
        return (
          <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-8 border-b pb-6">{t('mains', 'מנות עיקריות')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainDishes.map((main) => (
                <div
                  key={main.id}
                  onClick={() => setSelectedMain(main.id)}
                  className={`group cursor-pointer rounded-3xl overflow-hidden border-2 transition-all ${selectedMain === main.id ? 'border-amber-600 ring-4 ring-amber-50' : 'border-slate-100'}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={main.image} alt={main.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {selectedMain === main.id && (
                      <div className="absolute inset-0 bg-amber-900/20 flex items-center justify-center">
                        <CheckCircle size={48} className="text-white drop-shadow-lg" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{t(main.translationKey || main.name)}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{t(main.descKey || main.description)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 pt-8 border-t flex justify-center gap-4">
               <button onClick={() => setCurrentStep('salads')} className="px-8 py-4 rounded-full font-bold text-slate-500 hover:bg-slate-50">{t('back', 'חזרה')}</button>
               <button
                onClick={() => setCurrentStep('summary')}
                disabled={!selectedMain}
                className="bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-800 transition-all disabled:opacity-50"
               >
                {t('complete_order', 'לסיכום ההזמנה')}
               </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950 pb-20">
      <nav className="p-3 fixed top-0 w-full z-50 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
        <img src={logo} alt="Asado" className="h-10 w-auto cursor-pointer" onClick={() => setCurrentStep('home')} />

        <div className="flex items-center gap-6">
          <div className="relative">
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-800 transition-colors uppercase">
              <Globe size={16} className="text-amber-700" />
              {i18n.language}
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangOpen && (
              <ul className="absolute top-full mt-2 bg-white border border-slate-100 shadow-xl rounded-xl py-2 w-32 z-[60] left-0 right-auto rtl:right-0 rtl:left-auto">
                {languages.map((lang) => (
                  <li key={lang.code} onClick={() => { i18n.changeLanguage(lang.code); setIsLangOpen(false); }} className={`px-4 py-2 text-sm cursor-pointer ${i18n.language === lang.code ? 'text-amber-700 font-bold bg-amber-50' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="tel:0527977394" className="hidden lg:flex items-center gap-2 font-medium text-amber-950 hover:text-amber-700">
            <Phone size={16} /> 052-7977394
          </a>

          <div className="relative cursor-pointer group" onClick={() => currentStep !== 'home' && setCurrentStep('summary')}>
            <ShoppingCart className="text-amber-800 group-hover:scale-110 transition-transform" size={22} />
            {selectedSalads.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {selectedSalads.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      <main className={`relative ${currentStep === 'home' ? 'min-h-[90vh]' : 'min-h-screen'} flex items-center pt-24`}>
        <div className="absolute inset-0 z-0 bg-black">
          <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000" alt="Table" className="w-full h-full object-cover opacity-60" />
        </div>
        <section className="relative z-10 w-full px-4">{renderStep()}</section>
      </main>

      {/* Real-time Summary Bar (Sticky at bottom when ordering) */}
      {currentStep !== 'home' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 p-4 z-40 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex gap-8 items-center text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className={selectedSalads.length === SALAD_LIMIT ? "text-green-600" : "text-slate-300"} />
                <span>{selectedSalads.length}/{SALAD_LIMIT} {t('salads')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils size={16} className={selectedMain ? "text-green-600" : "text-slate-300"} />
                <span>{selectedMain ? t('main_selected', 'מנה עיקרית נבחרה') : t('select_main', 'בחרו עיקרית')}</span>
              </div>
            </div>
            <div className="text-xl font-black text-amber-950">
              {totalPrice} ₪ <span className="text-xs font-normal text-slate-500">/{t('per_person', 'למנה')}</span>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <footer className="py-24 bg-slate-900 text-slate-300 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-4xl font-black text-white mb-16 tracking-tight">{t('what_clients_say')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 transition-colors">
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-white font-medium mb-4 italic">"האוכל הגיע חם, השירות היה מדהים והסלטים היו הכי טריים שיש. מומלץ בחום!"</p>
                  <div className="text-sm font-bold text-amber-600 uppercase tracking-widest">— משפחת ישראלי</div>
               </div>
             ))}
          </div>
          <div className="mt-20 pt-10 border-t border-slate-800 text-center text-xs opacity-50">
             {t('kashrut')}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;