import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      he: {
        translation: {
          welcome: "שבת בטוב טעם - עם מעדני אסאדו",
          cta: "מתחילים להרכיב את התפריט שלכם",
          salad_limit: "בחרת {{count}} מתוך 8 סלטים",
          asado_sweet: "אסאדו ברוטב מתוק",
          pargit: "פרגית עסיסית בתיבול ביתי",
          couscous: "קוסקוס אותנטי",
          kashrut: "בד\"ץ העדה החרדית | מחפוד | רובין | הרב אפרתי"
        }
      },
      en: {
        translation: {
          welcome: "Shabbat in Style - With Asado Delicacies",
          cta: "Start Building Your Menu",
          salad_limit: "Selected {{count}} of 8 salads",
          asado_sweet: "Asado in Sweet Sauce",
          pargit: "Juicy Grilled Chicken",
          couscous: "Authentic Couscous",
          kashrut: "Badatz Edah HaChareidit | Mahpud | Rubin | Rabbi Efrati"
        }
      },
      fr: {
        translation: {
          welcome: "Chabbat avec Goût - Délices d'Asado",
          cta: "Composer votre menu",
          salad_limit: "{{count}} sur 8 salades sélectionnées",
          asado_sweet: "Boeuf Asado Sauce Sucrée",
          pargit: "Poulet Grillé Juteux",
          couscous: "Couscous Authentique",
          kashrut: "Cacher: Badatz Edah HaChareidit | Mahpud | Rubin"
        }
      }
    },
    fallbackLng: "he",
    interpolation: { escapeValue: false }
  });

export default i18n;