import React from 'react';
import { ShoppingBag, ArrowLeft, Calendar, MapPin, Utensils, Package, List } from 'lucide-react';

export const SummaryStep = ({ logic }) => {
  const {
    t,
    i18n,
    selectedSalads = [],
    selectedMain,
    isPremiumPackage,
    totalPrice,
    setCurrentStep,
    eventData
  } = logic;

  const isRTL = i18n?.language === 'he';

  const handleWhatsAppSend = () => {
    const phoneNumber = "972527977394";

    // Helper to get display name for WhatsApp
    const getDisplayName = (item) => {
      if (!item) return '---';
      if (typeof item === 'string') return t(item); // If it's just an ID
      return t(item.translationKey || item.nameKey) || item.name || '---';
    };

    const saladsList = selectedSalads.length > 0
      ? selectedSalads.map(s => `• ${getDisplayName(s)}`).join('\n')
      : t('none');

    const mainDishName = getDisplayName(selectedMain);
    const packageType = isPremiumPackage ? t('premium') : t('basic');

    const message = `
*${t('order_summary')}*
--------------------------
*${t('event_details')}:*
📅 ${t('event_date')}: ${eventData?.date || '---'}
⏰ ${t('event_time')}: ${eventData?.time || '---'}
📍 ${t('event_location')}: ${eventData?.location || '---'}
👥 ${t('guests_count')}: ${eventData?.guests || '---'}
🎈 ${t('event_type')}: ${eventData?.type ? t(eventData.type) : '---'}

*${t('main_dish')}:*
🍗 ${mainDishName}

*${t('salads')}:*
${saladsList}

*${t('package')}:*
📦 ${packageType}

*${t('total_to_pay')}:*
💰 *${totalPrice} ₪*
--------------------------
`.trim();

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
      <div className="text-center mb-8">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="text-amber-700" size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-900">{t('order_summary')}</h2>
      </div>

      <div className="space-y-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Main Dish */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm uppercase">
              <Utensils size={16} className="text-amber-600" /> {t('main_dish')}
            </h3>
            <p className="font-black text-slate-900">
              {/* Check if object or string */}
              {selectedMain ? (typeof selectedMain === 'string' ? t(selectedMain) : (t(selectedMain.nameKey) || selectedMain.name)) : '---'}
            </p>
          </div>

          {/* Package */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm uppercase">
              <Package size={16} className="text-amber-600" /> {t('package')}
            </h3>
            <p className="font-black text-slate-900">{isPremiumPackage ? t('premium') : t('basic')}</p>
          </div>
        </div>

        {/* Salads List */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm border-b pb-2 uppercase">
            <List size={18} className="text-amber-600" /> {t('salads')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedSalads.length > 0 ? (
              selectedSalads.map((salad, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg text-sm font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {/* Logic: if salad is string (ID), translate it. If object, use key. */}
                  {typeof salad === 'string' ? t(salad) : (t(salad.translationKey) || salad.name)}
                </div>
              ))
            ) : (
              <p className="text-slate-400 italic text-sm">{t('none', 'לא נבחרו סלטים')}</p>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl">
          <h3 className="font-bold mb-3 flex items-center gap-2 text-sm text-amber-400 uppercase">
            <Calendar size={18} /> {t('event_details')}
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-xs opacity-90">
             <span>{t('event_date')}: {eventData?.date || '---'}</span>
             <span>{t('event_time')}: {eventData?.time || '---'}</span>
             <span className="col-span-2 flex items-center gap-1">
                <MapPin size={12} /> {eventData?.location || '---'}
             </span>
          </div>
        </div>
      </div>

      <div className="bg-amber-950 p-6 rounded-2xl flex justify-between items-center mb-8 shadow-xl">
        <span className="text-white font-bold text-lg">{t('total_to_pay')}</span>
        <span className="text-3xl font-black text-amber-400">{totalPrice} ₪</span>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={handleWhatsAppSend}
          className="w-full bg-amber-700 text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-800 transition-all active:scale-95 shadow-xl"
        >
          {t('confirm_and_pay')}
        </button>

        <button
          onClick={() => setCurrentStep('event')}
          className="flex items-center justify-center gap-2 text-slate-400 font-bold py-2 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
          {t('back')}
        </button>
      </div>
    </div>
  );
};