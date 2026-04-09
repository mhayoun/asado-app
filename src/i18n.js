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
          start_building: "מתחילים להרכיב את התפריט שלכם",
          home_description: "בחרו את המנות המועדפות עליכם לארוחת שבת מושלמת",
          start_now: "מתחילים",
          salads: "בחירת סלטים",
          selected: "נבחרו",
          premium_toggle: "שדרגו לחבילת הכל כלול (+20 ש\"ח)?",
          next_step: "לשלב הבא: מנות עיקריות",
          recommendations: "המלצות",
          personal_area: "אזור אישי",
          what_clients_say: "מה הלקוחות אומרים",
          kashrut: "בד\"ץ העדה החרדית | מחפוד | רובין | הרב אפרתי",
          // שמות סלטים לדוגמה
          salad_hummus: "חומוס ביתי",
          salad_matbucha: "מטבוחה מרוקאית"
        }
      },
      en: {
        translation: {
          start_building: "Start Building Your Menu",
          home_description: "Choose your favorite dishes for the perfect Shabbat meal",
          start_now: "Start Now",
          salads: "Select Salads",
          selected: "Selected",
          premium_toggle: "Upgrade to All-Inclusive (+20 NIS)?",
          next_step: "Next: Main Courses",
          recommendations: "Reviews",
          personal_area: "My Account",
          what_clients_say: "What Our Clients Say",
          kashrut: "Badatz Edah HaChareidit | Mahpud | Rubin | Rabbi Efrati",
          salad_hummus: "Homemade Hummus",
          salad_matbucha: "Moroccan Matbucha"
        }
      },
      fr: {
        translation: {
          start_building: "Composez votre menu",
          home_description: "Choisissez vos plats préférés pour un repas de Chabbat parfait",
          start_now: "Commencer",
          salads: "Sélection de salades",
          selected: "Sélectionnés",
          premium_toggle: "Passer au Tout-Inclus (+20 NIS) ?",
          next_step: "Suivant : Plats principaux",
          recommendations: "Avis",
          personal_area: "Mon Compte",
          what_clients_say: "Ce que disent nos clients",
          kashrut: "Cacher: Badatz Edah HaChareidit | Mahpud | Rubin",
          salad_hummus: "Houmous Maison",
          salad_matbucha: "Matbucha Marocaine"
        }
      }
    },
    fallbackLng: "he",
    interpolation: { escapeValue: false }
  });

export default i18n;