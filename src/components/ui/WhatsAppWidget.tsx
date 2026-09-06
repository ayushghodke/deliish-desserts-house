'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Clock, CheckCheck } from 'lucide-react';
import { CAFE_INFO } from '@/lib/constants';

// Authentic WhatsApp SVG Icon
export function WhatsAppIcon({ className = 'w-6 h-6', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const QUICK_INQUIRIES = [
  {
    label: '🪑 Reserve a Table (6 Tables)',
    message: "Hi Prratik! I would like to reserve a table at Deliish Desserts House.",
  },
  {
    label: '🍰 Today’s Specials & Must-Try',
    message: "Hi Prratik! Could you recommend today's chef specials and best-selling desserts?",
  },
  {
    label: '📍 Location & Opening Hours',
    message: "Hi! Where are you located, and what are today's timings?",
  },
  {
    label: '🥡 Takeaway / Party Orders',
    message: "Hi Prratik! I'd like to place a takeaway order from Deliish Desserts House.",
  },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [customMsg, setCustomMsg] = useState('');

  const cleanPhone = CAFE_INFO.phone.replace(/\D/g, ''); // 919011555663

  const openWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message.trim() || `Hi Prratik, I'm visiting Deliish Desserts House website and would like to connect!`);
    const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(customMsg);
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            className="pointer-events-auto w-[90vw] sm:w-[360px] max-w-[380px] max-h-[min(520px,calc(100vh-100px))] mb-3 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)] border border-[var(--gold)]/30 bg-[#2A0202] text-white flex flex-col"
          >
            {/* Widget Header - Luxury Green & Maroon theme */}
            <div className="bg-gradient-to-r from-[#075e54] via-[#128c7e] to-[#25d366] p-3 sm:p-3.5 text-white relative shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white/80 shrink-0 shadow-md">
                  <Image
                    src={CAFE_INFO.logo}
                    alt={CAFE_INFO.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base tracking-wide leading-tight truncate">
                      Prratik (Owner)
                    </h4>
                    <span className="text-[9px] sm:text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-semibold">
                      Deliish
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/90 flex items-center gap-1 mt-0.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                    Online • Replies in minutes
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close WhatsApp chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-3 sm:p-3.5 bg-[#1E0101] flex-1 overflow-y-auto space-y-3 text-xs sm:text-sm">
              {/* WhatsApp chat bubble */}
              <div className="flex gap-2 items-end">
                <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[var(--gold)]/40 mb-1">
                  <Image src={CAFE_INFO.logo} alt="Logo" fill className="object-cover" />
                </div>
                <div className="bg-[#2D0404] text-[var(--cream)] rounded-2xl rounded-bl-sm p-3 shadow-md border border-[var(--gold)]/20 max-w-[88%] text-xs leading-relaxed">
                  <p className="font-medium text-[var(--gold)] mb-1 flex items-center gap-1">
                    <Sparkles size={12} />
                    Welcome to Deliish Desserts!
                  </p>
                  <p className="text-white/90">
                    Hey! Craving handcrafted thick shakes, kunafa, or want to book one of our 6 tables?
                  </p>
                  <p className="text-white/80 mt-1">
                    Tap a quick option below or message me directly on WhatsApp!
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[var(--warm-grey)]">
                    <Clock size={9} />
                    <span>Just now</span>
                    <CheckCheck size={11} className="text-[#25D366]" />
                  </div>
                </div>
              </div>

              {/* Quick Prompt Options */}
              <div className="pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold)]/80 mb-2 px-1">
                  Quick Inquiries
                </p>
                <div className="flex flex-col gap-2">
                  {QUICK_INQUIRIES.map((inq, idx) => (
                    <button
                      key={idx}
                      onClick={() => openWhatsApp(inq.message)}
                      className="text-left text-xs bg-white/5 hover:bg-[#25D366]/20 border border-[var(--gold)]/20 hover:border-[#25D366]/60 rounded-xl p-2.5 text-[var(--cream)] hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate pr-2">{inq.label}</span>
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Input / Direct CTA */}
            <div className="p-3 bg-[#150101] border-t border-[var(--gold)]/20">
              <form onSubmit={handleSendCustom} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="flex-1 bg-white/10 text-white placeholder-white/50 text-xs sm:text-sm rounded-full px-4 py-2.5 border border-[var(--gold)]/30 focus:border-[#25D366] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1faa53] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md cursor-pointer"
                  aria-label="Send WhatsApp message"
                >
                  <Send size={16} />
                </button>
              </form>

              <button
                type="button"
                onClick={() => openWhatsApp(customMsg || `Hi Prratik! I'd like to connect with Deliish Desserts House.`)}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white font-bold py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Open Direct WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Helper Pill - visible when closed */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-2 bg-[#2A0202]/95 backdrop-blur-md border border-[var(--gold)]/40 text-[var(--cream)] px-3.5 py-2 rounded-full text-xs shadow-xl cursor-pointer hover:border-[var(--gold)] transition-colors"
            onClick={() => {
              setIsOpen(true);
              setShowNotificationBadge(false);
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span className="font-medium">Chat with Prratik</span>
          </motion.div>
        )}

        {/* Circular Pulse Button */}
        <div className="relative">
          {/* Animated Green Pulse Ripple */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setShowNotificationBadge(false);
            }}
            aria-label="Open WhatsApp chat"
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none group border-2 border-white/40 cursor-pointer"
          >
            {isOpen ? (
              <X size={28} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
            )}

            {/* Notification Badge */}
            {showNotificationBadge && !isOpen && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4A843] text-[#4A0404] text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-[#4A0404] shadow-md animate-bounce">
                1
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
