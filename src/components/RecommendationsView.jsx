import React from 'react';
import { Star, X, MessageCircle } from 'lucide-react';

export const RecommendationsView = ({ onClose, t }) => {
  // Sample data - in a real app, this could come from a data file
  const reviews = [
    {
      name: "משפחת ישראלי",
      text: "האסאדו הגיע חם ונימוח, הסלטים היו טריים והשירות פשוט יוצא מן הכלל. חוויה מדהימה!",
      stars: 5
    },
    {
      name: "יוסי כהן",
      text: "הזמנו לאירוע חברה וכולם נהנו מאוד. הבשר איכותי והכמויות היו נדיבות מאוד.",
      stars: 5
    },
    {
      name: "מיכל אברהם",
      text: "הסלטים הכי טעימים שאכלתי במשלוח. הכל ארוז בצורה נקייה ומכובדת. מומלץ בחום!",
      stars: 5
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Dark Overlay - Clicking this also closes the view */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">

        {/* Header */}
        <div className="bg-amber-50 p-8 text-center border-b border-amber-100">
          <button
            onClick={onClose}
            className="absolute top-6 left-6 p-2 hover:bg-white rounded-full transition-colors shadow-sm"
          >
            <X size={20} className="text-slate-500" />
          </button>

          <div className="bg-amber-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3">
            <MessageCircle className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {t('what_clients_say', 'מה הלקוחות שלנו אומרים')}
          </h2>
        </div>

        {/* Reviews List */}
        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="group p-5 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all"
            >
              <div className="flex gap-1 mb-3 text-amber-500">
                {[...Array(rev.stars)].map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-4">
                "{rev.text}"
              </p>
              <div className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                — {rev.name}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="p-6 bg-slate-50 text-center">
          <button
            onClick={onClose}
            className="text-sm font-bold text-slate-500 hover:text-amber-700 transition-colors"
          >
            {t('close', 'סגור')}
          </button>
        </div>
      </div>
    </div>
  );
};