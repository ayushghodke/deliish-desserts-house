'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, QrCode } from 'lucide-react';
import Image from 'next/image';
import { CAFE_INFO } from '@/lib/constants';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#320202] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--gold)] text-xs uppercase tracking-[0.25em] font-bold block mb-3">
            Location & Direct Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--cream)] mb-4">
            Visit & Connect
          </h2>
          <p className="max-w-xl mx-auto text-[var(--cream)]/80 text-sm md:text-base">
            Reach out directly to founder Prratik, reserve your table, or navigate with one tap via Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Contact Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#240101]/90 border border-[var(--gold)]/30 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-7">
              {/* Owner & Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold)]">
                    Owner & Host ({CAFE_INFO.owner})
                  </span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={`tel:${CAFE_INFO.phone}`}
                      className="text-xl md:text-2xl font-heading font-bold text-[var(--cream)] hover:text-[var(--gold)] transition-colors"
                    >
                      {CAFE_INFO.phone}
                    </a>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                      Direct Call Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold)]">
                    Cafe Address
                  </span>
                  <p className="text-base text-[var(--cream)] mt-1 leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                  <a
                    href={CAFE_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--gold)] hover:text-white font-semibold mt-2 underline underline-offset-4"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold)]">
                    Opening Hours
                  </span>
                  <p className="text-sm text-[var(--cream)] mt-1">
                    <strong className="text-[var(--gold)]">Mon – Fri:</strong> {CAFE_INFO.hours.weekdays}
                  </p>
                  <p className="text-sm text-[var(--cream)]">
                    <strong className="text-[var(--gold)]">Sat – Sun:</strong> {CAFE_INFO.hours.weekends}
                  </p>
                </div>
              </div>

              {/* Social Connect */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                  <InstagramIcon size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold)]">
                    Follow on Instagram
                  </span>
                  <p className="text-sm text-[var(--cream)] mt-1">
                    Daily dessert stories, reel drops, and new weekly specials.
                  </p>
                  <a
                    href={CAFE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[var(--gold)] hover:text-white mt-1.5"
                  >
                    <span>{CAFE_INFO.instagramHandle}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[var(--gold)]/20 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${CAFE_INFO.phone.replace(/\D/g, '')}?text=Hi%20Prratik,%20I%20would%20like%20to%20reserve%20a%20table%20at%20Deliish%20Desserts%20House`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold rounded-full py-3.5 px-6 hover:bg-[#1faa53] transition-colors shadow-lg text-center"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={CAFE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2.5 border-2 border-[var(--gold)] text-[var(--gold)] font-bold rounded-full py-3.5 px-6 hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-all duration-300 text-center"
              >
                <MapPin size={18} />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Map & Instagram QR Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Interactive Google Maps Card */}
            <div className="bg-[#240101]/90 border border-[var(--gold)]/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--gold)] flex items-center gap-1.5">
                    <MapPin size={14} />
                    Live Location
                  </span>
                  <span className="text-[10px] text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full border border-green-500/30">
                    Open Now
                  </span>
                </div>
                <h3 className="font-heading text-xl text-[var(--cream)]">
                  Deliish Desserts House
                </h3>
                <p className="text-xs text-[var(--cream)]/70 mt-1">
                  Near Shivaji Chowk · 6 Tables Dine-In
                </p>
              </div>

              {/* Map Visual Link */}
              <a
                href={CAFE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="my-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--gold)]/30 group block bg-[#1a0101]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3D0303] via-[#5A0606] to-[#7B0808] flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)] text-[var(--maroon)] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(212,168,67,0.5)]">
                    <MapPin size={30} />
                  </div>
                  <span className="text-sm font-bold text-[var(--cream)]">Click to Open Google Maps</span>
                  <span className="text-[11px] text-[var(--gold)] mt-1 flex items-center gap-1">
                    <span>Get Instant GPS Turn-by-Turn</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </a>

              <a
                href={CAFE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs font-semibold py-2.5 rounded-xl bg-[var(--gold)]/15 border border-[var(--gold)]/40 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-all block"
              >
                Open in Google Maps App →
              </a>
            </div>

            {/* Instagram QR Card */}
            <div className="bg-[#240101]/90 border border-[var(--gold)]/30 rounded-3xl p-5 shadow-2xl flex items-center gap-5">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-[var(--gold)]/40 bg-white p-1 shrink-0">
                <Image
                  src="/images/branding/instagram-qr.png"
                  alt="Deliish Desserts House Instagram QR Code"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--gold)] flex items-center gap-1">
                  <QrCode size={12} />
                  Scan on Phone
                </span>
                <h4 className="font-heading text-lg text-[var(--cream)] mt-0.5">
                  Follow on Instagram
                </h4>
                <p className="text-[11px] text-[var(--cream)]/75 mt-0.5">
                  Scan to follow @deliishdesserts_house_ for daily sweet specials!
                </p>
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--gold)] font-bold inline-flex items-center gap-1 mt-1 hover:underline"
                >
                  <span>Open Instagram Profile</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
