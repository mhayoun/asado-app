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
          mains: "מנות עיקריות",
          selected: "נבחרו",
          items: "פריטים",
          back: "חזרה",
          // SummaryBar Keys
          salads_selected: "סלטים",
          main_selected: "מנה נבחרה",
          select_main: "בחרו עיקרית",
          per_person: "למנה",
          // Extras Step Keys
          upgrade_package: "שדרוג חבילה",
          premium_promo: "הפכו את הארוחה שלכם למושלמת עם החבילה המורחבת שלנו",
          premium_title: "חבילת פרימיום",
          premium_desc: "כולל שתייה קלה, סכו\"ם מהודר ומשלוח חינם",
          // Navigation & Summary
          next_step: "לשלב הבא: מנות עיקריות",
          next_step_2: "שדרוג חבילה ?",
          view_summary: "לסיכום ההזמנה",
          order_summary: "סיכום הזמנה",
          main_dish: "מנה עיקרית",
          package: "חבילה",
          premium: "פרימיום",
          basic: "בסיסית",
          total_to_pay: "סה\"כ לתשלום",
          confirm_and_pay: "אישור ושליחה בוואטסאפ",
          recommendations: "המלצות",
          personal_area: "אזור אישי",
          what_clients_say: "מה הלקוחות אומרים",
          kashrut: "בד\"ץ העדה החרדית | מחפוד | רובין | הרב אפרתי",
          // Main Dishes
          main_asado_name: "אסאדו ברוטב מתוק",
          main_asado_desc: "בשר אסאדו בבישול ארוך ברוטב ברביקיו דבש",
          main_pargit_name: "פרגית עסיסית",
          main_pargit_desc: "סטייק פרגית על האש בתיבול ביתי עדין",
          main_meatballs_name: "קציצות בקר",
          main_meatballs_desc: "קציצות בשר בקר מובחר ברוטב עגבניות עשיר"
        }
      },
      en: {
        translation: {
          start_building: "Start Building Your Menu",
          home_description: "Choose your favorite dishes for the perfect Shabbat meal",
          start_now: "Start Now",
          salads: "Select Salads",
          mains: "Main Courses",
          selected: "Selected",
          items: "items",
          back: "Back",
          // SummaryBar Keys
          salads_selected: "Salads",
          main_selected: "Main selected",
          select_main: "Select a main",
          per_person: "per person",
          // Extras Step Keys
          upgrade_package: "Upgrade Package",
          premium_promo: "Make your meal perfect with our expanded package",
          premium_title: "Premium Package",
          premium_desc: "Includes soft drinks, luxury cutlery, and free delivery",
          // Navigation & Summary
          next_step: "Next: Main Courses",
          next_step_2: "Upgrade Package?",
          view_summary: "View Summary",
          order_summary: "Order Summary",
          main_dish: "Main Dish",
          package: "Package",
          premium: "Premium",
          basic: "Basic",
          total_to_pay: "Total to Pay",
          confirm_and_pay: "Confirm & Send via WhatsApp",
          recommendations: "Reviews",
          personal_area: "My Account",
          what_clients_say: "What Our Clients Say",
          kashrut: "Kashrut: Badatz Edah HaChareidit | Mahpud",
          // Main Dishes
          main_asado_name: "Sweet Sauce Asado",
          main_asado_desc: "Slow-cooked asado in honey BBQ sauce",
          main_pargit_name: "Juicy Pargit",
          main_pargit_desc: "Grilled spring chicken with house seasoning",
          main_meatballs_name: "Beef Meatballs",
          main_meatballs_desc: "Premium beef meatballs in rich tomato sauce"
        }
      },
      fr: {
        translation: {
          start_building: "Composez votre menu",
          home_description: "Choisissez vos plats préférés pour un repas de Chabbat parfait",
          start_now: "Commencer",
          salads: "Sélection de salades",
          mains: "Plats Principaux",
          selected: "Sélectionnés",
          items: "articles",
          back: "Retour",
          // SummaryBar Keys
          salads_selected: "Salades",
          main_selected: "Plat choisi",
          select_main: "Choisir un plat",
          per_person: "par personne",
          // Extras Step Keys
          upgrade_package: "Améliorer le forfait",
          premium_promo: "Rendez votre repas parfait avec notre forfait étendu",
          premium_title: "Forfait Premium",
          premium_desc: "Comprend boissons fraîches, couverts de luxe et livraison gratuite",
          // Navigation & Summary
          next_step: "Suivant : Plats principaux",
          next_step_2: "Améliorer le forfait ?",
          view_summary: "Voir le résumé",
          order_summary: "Résumé de la commande",
          main_dish: "Plat Principal",
          package: "Forfait",
          premium: "Premium",
          basic: "De Base",
          total_to_pay: "Total à payer",
          confirm_and_pay: "Confirmer et envoyer par WhatsApp",
          recommendations: "Avis",
          personal_area: "Mon Compte",
          what_clients_say: "Ce que disent nos clients",
          kashrut: "Cacher: Badatz Edah HaChareidit | Mahpud",
          // Main Dishes
          main_asado_name: "Asado sauce sucrée",
          main_asado_desc: "Asado mijoté dans une sauce barbecue au miel",
          main_pargit_name: "Pargit juteux",
          main_pargit_desc: "Steak de poulet grillé avec assaisonnement maison",
          main_meatballs_name: "Boulettes de bœuf",
          main_meatballs_desc: "Boulettes de bœuf de qualité dans une sauce tomate riche"
        }
      }
    },
    fallbackLng: "he",
    interpolation: { escapeValue: false }
  });

export default i18n;