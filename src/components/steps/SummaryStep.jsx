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

    const getDisplayName = (item) => {
      if (!item) return '---';
      if (typeof item === 'string') return t(item);
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
    <div className={`max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500 mb-10 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="text-amber-700" size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-900">{t('order_summary')}</h2>
      </div>

      <div className="space-y-6 mb-8">

        {/* 1. Salads List */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm uppercase tracking-wider">
              <List size={18} className="text-amber-600" /> {t('salads')}
            </h3>
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-black">
              {selectedSalads.length} {t('items')}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedSalads.length > 0 ? (
              selectedSalads.map((salad, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-sm font-bold border border-slate-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-slate-800">
                    {typeof salad === 'string' ? t(salad) : (t(salad.translationKey) || salad.name)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-slate-400 italic text-sm py-2">{t('none', 'לא נבחרו סלטים')}</p>
            )}
          </div>
        </div>

        {/* 2. Main Dish & Package Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100/50">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
              <Utensils size={16} className="text-amber-600" /> {t('main_dish')}
            </h3>
            <p className="font-black text-slate-900 text-lg">
              {selectedMain ? (typeof selectedMain === 'string' ? t(selectedMain) : (t(selectedMain.nameKey) || selectedMain.name)) : '---'}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100/50">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
              <Package size={16} className="text-amber-600" /> {t('package')}
            </h3>
            <p className="font-black text-slate-900 text-lg">
              {isPremiumPackage ? t('premium') : t('basic')}
            </p>
          </div>
        </div>

        {/* 3. Event Details */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-inner">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-sm text-amber-400 uppercase tracking-widest">
            <Calendar size={18} /> {t('event_details')}
          </h3>
          <div className="grid grid-cols-2 gap-y-3 text-xs opacity-90">
             <div>
                <p className="text-slate-400 text-[10px] uppercase mb-0.5">{t('event_date')}</p>
                <p className="font-bold">{eventData?.date || '---'}</p>
             </div>
             <div>
                <p className="text-slate-400 text-[10px] uppercase mb-0.5">{t('event_time')}</p>
                <p className="font-bold">{eventData?.time || '---'}</p>
             </div>
             <div className="col-span-2 border-t border-white/10 pt-2">
                <p className="text-slate-400 text-[10px] uppercase mb-0.5">{t('event_location')}</p>
                <p className="font-bold flex items-center gap-1">
                  <MapPin size={12} className="text-amber-500" /> {eventData?.location || '---'}
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className={`bg-amber-950 p-6 rounded-2xl flex justify-between items-center mb-8 shadow-xl border border-amber-900/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className="text-white font-bold text-lg">{t('total_to_pay')}</span>
        <span className="text-3xl font-black text-amber-400">{totalPrice} ₪</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4">
        <button
          onClick={handleWhatsAppSend}
          className="w-full bg-amber-700 text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-800 transition-all active:scale-95 shadow-xl hover:shadow-amber-900/20"
        >
          {t('confirm_and_pay')}
        </button>

        <button
          onClick={() => setCurrentStep('event')}
          className={`flex items-center justify-center gap-2 text-slate-400 font-bold py-2 hover:text-slate-800 transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLeft size={18} className={`${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
          {t('back')}
        </button>
      </div>
    </div>
  );
};