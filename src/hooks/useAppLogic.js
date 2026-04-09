// src/hooks/useAppLogic.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useAppLogic = () => {
  const { t, i18n } = useTranslation();

  // State
  const [currentStep, setCurrentStep] = useState('home');
  const [selectedSalads, setSelectedSalads] = useState([]);
  const [selectedMain, setSelectedMain] = useState(null);
  const [isPremiumPackage, setIsPremiumPackage] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Constants
  const SALAD_LIMIT = 2;
  const BASE_PRICE = 169;
  const PREMIUM_ADDON = 20;

  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  // Side Effects (Direction & Language)
  useEffect(() => {
    const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Logic Helpers
  const toggleSalad = (id) => {
    setSelectedSalads((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length < SALAD_LIMIT) return [...prev, id];
      return prev;
    });
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  const totalPrice = isPremiumPackage ? BASE_PRICE + PREMIUM_ADDON : BASE_PRICE;

  return {
    t,
    i18n,
    currentStep,
    setCurrentStep,
    selectedSalads,
    toggleSalad,
    selectedMain,
    setSelectedMain,
    isPremiumPackage,
    setIsPremiumPackage,
    isLangOpen,
    setIsLangOpen,
    totalPrice,
    languages,
    changeLanguage,
    showRecommendations,
    setShowRecommendations,
    SALAD_LIMIT
  };
};