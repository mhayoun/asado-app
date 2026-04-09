import { Globe, ChevronDown, Phone, ShoppingCart, MessageSquare } from 'lucide-react';

export const Navigation = ({
  logo, logic, setCurrentStep
}) => {
  const {
    isLangOpen, setIsLangOpen, languages, i18n,
    changeLanguage, selectedSalads, currentStep, setShowRecommendations
  } = logic;

  const cartCount = selectedSalads.length;

  // New: Handle cart click logic
  const handleCartClick = () => {
    if (cartCount > 0) {
      setShowRecommendations(false); // Ensure modal is closed
      setCurrentStep('summary');
    }
  };

  return (
    <nav className="p-3 fixed top-0 w-full z-50 flex justify-between items-center bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer brightness-110"
          onClick={() => {
            setShowRecommendations(false);
            setCurrentStep('home');
          }}
        />

        {/* Recommendations Link */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowRecommendations(true);
          }}
          className="relative z-[60] flex items-center gap-1.5 text-sm font-bold text-white/90 hover:text-amber-400 transition-colors py-2 px-1"
        >
          <MessageSquare size={16} className="text-amber-500" />
          <span className="hidden sm:inline">המלצות</span>
        </button>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 text-sm font-bold text-white/90 hover:text-amber-400 transition-colors uppercase"
          >
            <Globe size={16} className="text-amber-500" />
            {i18n.language}
            <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <ul className="absolute top-full mt-2 bg-slate-900 border border-white/10 shadow-2xl rounded-xl py-2 w-32 z-[60] left-0 right-auto rtl:right-0 rtl:left-auto">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-4 py-2 text-sm cursor-pointer ${i18n.language === lang.code ? 'text-amber-500 font-bold bg-white/5' : 'text-white/70 hover:bg-white/10'}`}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone Link */}
        <a href="tel:0527977394" className="hidden lg:flex items-center gap-2 font-medium text-white/90 hover:text-amber-500 transition-colors">
          <Phone size={16} className="text-amber-500" /> 052-7977394
        </a>

        {/* Cart Icon - Logic updated here */}
        <div
          className={`relative group ${cartCount > 0 ? 'cursor-pointer' : 'cursor-default opacity-50'}`}
          onClick={handleCartClick}
        >
          <ShoppingCart
            className="text-amber-500 group-hover:scale-110 transition-transform"
            size={22}
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-md">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};