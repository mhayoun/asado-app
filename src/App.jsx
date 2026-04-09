import React from 'react';
import { useAppLogic } from './hooks/useAppLogic';
import { Navigation } from './components/Navigation';
import { SummaryBar } from './components/SummaryBar';
import { HomeStep } from './components/steps/HomeStep';
import { SaladStep } from './components/steps/SaladStep';
import { MainStep } from './components/steps/MainStep';
import { ExtrasStep } from './components/steps/ExtrasStep';
import { EventStep } from './components/steps/EventStep';
import { SummaryStep } from './components/steps/SummaryStep';
import { RecommendationsView } from './components/RecommendationsView';

// Import both images
import bgDesktop from './assets/bg.png';
import bgMobile from './assets/bgm.jpeg';
import logo from '/logo.png';

function App() {
  const logic = useAppLogic();
  const { t, i18n, currentStep, setCurrentStep, showRecommendations, setShowRecommendations } = logic;

  const renderStep = () => {
    switch (currentStep) {
      case 'home':
        return <HomeStep onStart={() => setCurrentStep('salads')} t={t} lang={i18n.language} />;
      case 'salads': return <SaladStep logic={logic} />;
      case 'mains': return <MainStep logic={logic} />;
      case 'extras': return <ExtrasStep logic={logic} />;
      case 'event': return <EventStep logic={logic} />;
      case 'summary': return <SummaryStep logic={logic} />;
      default: return null;
    }
  };

  const isHome = currentStep === 'home';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950">
      {/* Navigation is now visible on ALL pages, including Home */}
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

      {/* Added pt-20 even for Home so the text doesn't hide behind the Navigation bar.
          Removed overflow-hidden so users can scroll if the mobile screen is very short.
      */}
      <main className={`relative flex items-center min-h-screen pt-20 ${isHome ? 'pb-10' : 'pb-24'}`}>
        <div className="absolute inset-0 z-0 bg-black">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img
              src={bgMobile}
              alt="Background"
              className="w-full h-full object-cover md:object-contain opacity-70"
            />
          </picture>
        </div>

        <section className="relative z-10 w-full px-4">
          {renderStep()}
        </section>
      </main>

      {/* SummaryBar remains hidden on Home for a cleaner start */}
      {!isHome && <SummaryBar logic={logic} />}
    </div>
  );
}

export default App;