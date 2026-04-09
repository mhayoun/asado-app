// src/App.jsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageSquare, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import { initialSalads, mainDishes } from './data';
import logo from '/logo.png'; // Make sure the logo is in the public folder
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  // App State Management
  const [currentStep, setCurrentStep] = useState('home'); // Steps: 'home', 'salads', 'mains', 'summary'
  const [selectedSalads, setSelectedSalads] = useState([]);
  const [isPremiumPackage, setIsPremiumPackage] = useState(false);

  // Constants
  const SALAD_LIMIT = 8;
  const PRICE_BASE = 169;
  const PRICE_PREMIUM = 189;

  // Language & Layout Flip (Hebrew RTL, others LTR)
  useEffect(() => {
    const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Logic to handle salad selection (toggle checkboxes)
  const toggleSalad = (id) => {
    setSelectedSalads((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id); // Remove salad
      } else if (prev.length < SALAD_LIMIT) {
        return [...prev, id]; // Add salad if limit not reached
      }
      return prev; // Do nothing if limit reached
    });
  };

  // Helper function to render a single step based on state
  const renderStep = () => {
    switch (currentStep) {
      case 'home':
        return (
          <div className="text-center bg-white/90 p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm max-w-xl mx-auto transform transition-all hover:scale-105">
            <h2 className="text-3xl font-extrabold text-amber-950 mb-6 drop-shadow-sm">
              {t('start_building')}
            </h2>
            <p className="text-lg text-amber-900/80 mb-8 font-light max-w-sm mx-auto">
              {t('home_description', 'בחרו את המנות המועדפות עליכם לארוחת שבת מושלמת')}
            </p>
            <button
              onClick={() => setCurrentStep('salads')}
              className="bg-amber-700 text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-amber-800 transition-all flex items-center gap-3 mx-auto shadow-lg"
            >
              {t('start_now', 'מתחילים')}
              <ArrowRight className={`w-5 h-5 ${i18n.language === 'he' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        );

      case 'salads':
        return (
          <div className="max-w-6xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100">
            {/* Salad Counter Headline */}
            <div className="flex justify-between items-center mb-8 border-b pb-6">
              <h2 className="text-3xl font-black text-slate-900">{t('salads', 'בחירת סלטים')}</h2>
              <div className={`text-lg font-bold p-3 px-6 rounded-full ${selectedSalads.length === SALAD_LIMIT ? 'bg-green-100 text-green-900' : 'bg-slate-100 text-slate-700'}`}>
                {selectedSalads.length} / {SALAD_LIMIT} {t('selected', 'נבחרו')}
              </div>
            </div>

            {/* Premium Package Toggle */}
            <div className="flex items-center justify-between p-5 mb-10 bg-amber-50 rounded-2xl border border-amber-200 shadow-inner">
              <span className="font-semibold text-amber-950">{t('premium_toggle', 'שדרגו לחבילת הכל כלול (+20 ש"ח)?')}</span>
              <button
                onClick={() => setIsPremiumPackage(!isPremiumPackage)}
                className={`w-14 h-7 rounded-full transition-colors flex items-center ${isPremiumPackage ? 'bg-green-600' : 'bg-slate-300'}`}
              >
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transition-transform mx-1 ${isPremiumPackage ? (i18n.language === 'he' ? '-translate-x-8' : 'translate-x-8') : ''}`} />
              </button>
            </div>

            {/* Salad Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {initialSalads.map((salad) => (
                <div
                  key={salad.id}
                  onClick={() => toggleSalad(salad.id)}
                  className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 hover:border-amber-400 ${selectedSalads.includes(salad.id) ? 'border-amber-600 bg-amber-50 shadow-md' : 'border-slate-200 bg-white'}`}
                >
                  <img src={salad.image} alt={salad.name} className="w-20 h-20 object-cover rounded-xl shadow border" />
                  <div>
                    <p className="font-bold text-lg text-slate-950">{salad.name}</p>
                    <p className="text-sm text-slate-600 font-light">{salad.description}</p>
                  </div>
                  {/* Checkmark icon shown only if selected */}
                  {selectedSalads.includes(salad.id) && (
                    <CheckCircle className="absolute top-2 right-2 w-6 h-6 text-amber-700 bg-white rounded-full p-0.5" />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Button */}
            <div className="text-center mt-12 pt-8 border-t">
              <button
                onClick={() => setCurrentStep('mains')}
                disabled={selectedSalads.length !== SALAD_LIMIT}
                className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all flex items-center gap-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('next_step', 'לשלב הבא: מנות עיקריות')}
              </button>
            </div>
          </div>
        );

      // Other cases ('mains', 'summary') would go here...
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950">
      {/* Header: Fixed, Thin, and Transparent */}
      <nav className="p-3 fixed top-0 w-full z-50 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20">
        <img src={logo} alt="Asado Logo" className="h-10 w-auto" />
        <div className="flex items-center gap-6">
          <a href="tel:0527977394" className="text-sm flex items-center gap-2 font-medium text-amber-950 hover:text-amber-700">
            <Phone size={16} /> 052-7977394
          </a>
          <button className="text-sm font-light text-slate-600 hover:text-slate-900">{t('recommendations', 'המלצות')}</button>
          <button className="text-sm font-light text-slate-600 hover:text-slate-900">{t('personal_area', 'אזור אישי')}</button>
          <ShoppingCart className="text-amber-800" size={20} />
        </div>
      </nav>

      {/* Main Hero Background: Applies dark overlay to boost contrast */}
      <main className={`relative ${currentStep === 'home' ? 'min-h-[90vh]' : 'min-h-screen'} flex items-center pt-24`}>
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000" // Use high-res Shabbat table image
            alt="Luxurious Shabbat Table"
            className="w-full h-full object-cover opacity-60 grayscale-[10%]" // Apply dark blur/grayscale overlay
          />
        </div>

        {/* Dynamic Content: Renders home CTA or menu selection grid */}
        <section className="relative z-10 w-full px-4">
          {renderStep()}
        </section>
      </main>

      {/* Testimonials Slider/Footer: Shown on all steps */}
      <footer className="mt-20 py-16 bg-slate-900 text-slate-300">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-center text-3xl font-bold text-white mb-10 tracking-tight">{t('what_clients_say', 'מה הלקוחות אומרים')}</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-inner border border-slate-700">
              <MessageSquare className="mx-auto w-10 h-10 text-amber-600 mb-6" />
              <p className="font-medium text-lg text-white mb-3">"סלטים פשוט טריים"</p>
              <p className="text-slate-400 font-light">"האוכל הגיע חם ומסודר, והסלטים היו טריים וטעימים ביותר."</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-slate-600">משפחת כהן</p>
            </div>
            {/* Add more placeholders for testimonials... */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;