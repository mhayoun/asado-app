import React, { useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, UserCheck, Star, ArrowLeft } from 'lucide-react'; // Added ArrowLeft

export const EventStep = ({ logic }) => {
  const { t, i18n, eventData = {}, updateEventData, setCurrentStep } = logic;
  const isRTL = i18n.language === 'he';

  if (!eventData) return null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const eventTypes = [
    { id: 'brit_mila', icon: '👶' },
    { id: 'bar_mizva', icon: '✡️' },
    { id: 'fiancailles', icon: '💍' },
    { id: 'shabbat_hatan', icon: '🍷' },
    { id: 'seven_brachot', icon: '📜' },
    { id: 'hilloula', icon: '🕯️' },
    { id: 'yorstseit', icon: '⛪' },
  ];

  const isFormValid = eventData.date && eventData.type && eventData.location;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-xl rounded-3xl border border-slate-100 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-slate-900 mb-8 border-b pb-6 text-start">
        {t('event_details')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="space-y-4">
          <label className="block">
            <span className="text-slate-700 font-bold mb-2 flex items-center gap-2">
              <Calendar size={18} /> {t('event_date')}
            </span>
            <input
              type="date"
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 outline-none transition-all"
              value={eventData.date}
              onChange={(e) => updateEventData('date', e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-slate-700 font-bold mb-2 flex items-center gap-2">
              <Clock size={18} /> {t('event_time')}
            </span>
            <input
              type="time"
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 outline-none transition-all"
              value={eventData.time}
              onChange={(e) => updateEventData('time', e.target.value)}
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-slate-700 font-bold mb-2 flex items-center gap-2">
              <MapPin size={18} /> {t('event_location')}
            </span>
            <input
              type="text"
              placeholder={t('enter_location', 'הכנס מיקום אירוע')}
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 outline-none transition-all"
              value={eventData.location}
              onChange={(e) => updateEventData('location', e.target.value)}
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label>
              <span className="text-slate-700 font-bold mb-2 flex items-center gap-2">
                <Users size={18} /> {t('guests_count')}
              </span>
              <input
                type="number"
                className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 outline-none transition-all"
                value={eventData.guests}
                onChange={(e) => updateEventData('guests', e.target.value)}
              />
            </label>
            <label>
              <span className="text-slate-700 font-bold mb-2 flex items-center gap-2">
                <UserCheck size={18} /> {t('servers_count')}
              </span>
              <input
                type="number"
                className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 outline-none transition-all"
                value={eventData.servers}
                onChange={(e) => updateEventData('servers', e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <span className="text-slate-700 font-bold mb-4 block flex items-center gap-2">
          <Star size={18} className="text-amber-500" /> {t('event_type')}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => updateEventData('type', type.id)}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 font-bold ${
                eventData.type === type.id
                ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-md'
                : 'border-slate-100 hover:border-amber-200 text-slate-600'
              }`}
            >
              <span className="text-2xl">{type.icon}</span>
              <span className="text-xs">{t(type.id)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Footer with Back and Next buttons */}
      <div className="pt-8 border-t flex justify-center gap-4">
        <button
          onClick={() => setCurrentStep('extras')}
          className="px-8 py-4 rounded-full font-bold text-slate-500 hover:bg-slate-50 flex items-center gap-2 transition-all"
        >
          <ArrowLeft size={18} className={isRTL ? 'rotate-180' : ''} />
          {t('back', 'חזרה')}
        </button>

        <button
          onClick={() => setCurrentStep('summary')}
          disabled={!isFormValid}
          className="bg-slate-900 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-black transition-all disabled:opacity-30"
        >
          {t('view_summary')}
        </button>
      </div>
    </div>
  );
};