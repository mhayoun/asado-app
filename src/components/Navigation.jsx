// src/components/Navigation.jsx
import { Globe, ChevronDown, Phone, ShoppingCart, MessageSquare } from 'lucide-react';

export const Navigation = ({
  logo, logic, setCurrentStep
}) => {
  const {
    isLangOpen, setIsLangOpen, languages, i18n,
    changeLanguage, selectedSalads, currentStep, setShowRecommendations
  } = logic;

  const cartCount = selectedSalads.length;

  return (
    <nav className="p-3 fixed top-0 w-full z-50 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => {
            setShowRecommendations(false);
            setCurrentStep('home');
          }}
        />

        {/* New Recommendations Link */}
        <button
          onClick={(e) => {
            e.preventDefault(); // Stop any default behavior
            e.stopPropagation(); // Stop the click from bubbling up
            console.log("Recommendations button clicked"); // Check your console!
            setShowRecommendations(true);
          }}
          className="relative z-[60] flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-amber-800 transition-colors py-2 px-1"
        >
          <MessageSquare size={16} className="text-amber-700" />
          <span className="hidden sm:inline">המלצות</span>
        </button>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-800 transition-colors uppercase"
          >
            <Globe size={16} className="text-amber-700" />
            {i18n.language}
            <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <ul className="absolute top-full mt-2 bg-white border border-slate-100 shadow-xl rounded-xl py-2 w-32 z-[60] left-0 right-auto rtl:right-0 rtl:left-auto">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-4 py-2 text-sm cursor-pointer ${i18n.language === lang.code ? 'text-amber-700 font-bold bg-amber-50' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone Link */}
        <a href="tel:0527977394" className="hidden lg:flex items-center gap-2 font-medium text-amber-950 hover:text-amber-700">
          <Phone size={16} /> 052-7977394
        </a>

        {/* Cart Icon */}
        <div
          className="relative cursor-pointer group"
          onClick={() => currentStep !== 'home' && setCurrentStep('summary')}
        >
          <ShoppingCart className="text-amber-800 group-hover:scale-110 transition-transform" size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};