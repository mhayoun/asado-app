import React from 'react';
import { useAppLogic } from './hooks/useAppLogic';
import { Navigation } from './components/Navigation';
import { SummaryBar } from './components/SummaryBar';
import { HomeStep } from './components/steps/HomeStep';
import { SaladStep } from './components/steps/SaladStep';
import { MainStep } from './components/steps/MainStep';
import { ExtrasStep } from './components/steps/ExtrasStep'; // The Premium step
import { EventStep } from './components/steps/EventStep'; // New Import
import { SummaryStep } from './components/steps/SummaryStep'; // The final Summary step
import { RecommendationsView } from './components/RecommendationsView';
import bg from './assets/bg.png';

import logo from '/logo.png';

function App() {
  const logic = useAppLogic();
  const { t, i18n, currentStep, setCurrentStep, showRecommendations, setShowRecommendations } = logic;

  const renderStep = () => {
    switch (currentStep) {
      case 'home':
        return <HomeStep onStart={() => setCurrentStep('salads')} t={t} lang={i18n.language} />;
      case 'salads':
        return <SaladStep logic={logic} />;
      case 'mains':
        return <MainStep logic={logic} />;
      case 'extras':
        return <ExtrasStep logic={logic} />;
      case 'event':
        return <EventStep logic={logic} />;
      case 'summary':
        return <SummaryStep logic={logic} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950 pb-20">
      <Navigation
        logo={logo}
        logic={logic}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isLangOpen={logic.isLangOpen}
        setIsLangOpen={logic.setIsLangOpen}
        languages={logic.languages}
        i18n={i18n}
        changeLanguage={logic.changeLanguage}
        cartCount={logic.selectedSalads.length}
      />

      {showRecommendations && (
        <RecommendationsView
          onClose={() => setShowRecommendations(false)}
          t={t}
        />
      )}

      <main className={`relative ${currentStep === 'home' ? 'min-h-[90vh]' : 'min-h-screen'} flex items-center pt-24`}>
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={bg}
            alt="Table"
            className="w-full h-full object-contain opacity-60"
          />
        </div>
        <section className="relative z-10 w-full px-4">{renderStep()}</section>
      </main>

      {/* Summary Bar Component */}
      {currentStep !== 'home' && <SummaryBar logic={logic} />}

      {/* Testimonials and Footer components... */}
    </div>
  );
}

export default App;