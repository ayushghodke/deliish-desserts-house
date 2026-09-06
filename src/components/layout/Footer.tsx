'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { NAV_LINKS, CAFE_INFO } from '@/lib/constants';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1C0101] text-[var(--cream)] pt-20 pb-8 relative overflow-hidden border-t border-[var(--gold)]/20 w-full max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Logo (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--gold)] shadow-[0_0_15px_rgba(212,168,67,0.4)]">
                <Image
                  src={CAFE_INFO.logo}
                  alt={CAFE_INFO.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-[var(--gold)] font-bold tracking-wider leading-none">
                  Deliish
                </span>
                <span className="text-xs text-[var(--cream)]/80 tracking-[0.2em] uppercase font-sans mt-0.5">
                  Desserts House
                </span>
              </div>
            </Link>

            <p className="text-lg font-serif text-[var(--gold)] italic mt-2">
              &ldquo;{CAFE_INFO.tagline}&rdquo;
            </p>
            <p className="text-[var(--cream)]/75 mt-1 leading-relaxed max-w-sm text-sm">
              An independent dessert cafe founded by Prratik. Handcrafted thick shakes, authentic Ferrero Rocher crowns, and original dessert recipes served across 6 intimate tables.
            </p>

            {/* Direct Social Links */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-all duration-300 shadow-md"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/40 text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md"
                aria-label="WhatsApp Chat"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={CAFE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-all duration-300 shadow-md"
                aria-label="Google Maps Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-serif text-[var(--gold)] mb-5 uppercase tracking-wider font-semibold">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors hover:pl-1.5 duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-serif text-[var(--gold)] mb-5 uppercase tracking-wider font-semibold">
              Visit Us
            </h3>
            <ul className="flex flex-col gap-3.5 text-xs text-[var(--cream)]/80">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--gold)] shrink-0 mt-0.5" size={16} />
                <div>
                  <p>{CAFE_INFO.address}</p>
                  <a
                    href={CAFE_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--gold)] shrink-0" size={16} />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-[var(--gold)] transition-colors">
                  {CAFE_INFO.phone} (Prratik)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--gold)] shrink-0" size={16} />
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-[var(--gold)] transition-colors">
                  {CAFE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-[var(--gold)] shrink-0 mt-0.5" size={16} />
                <div className="flex flex-col">
                  <span>Weekdays: {CAFE_INFO.hours.weekdays}</span>
                  <span>Weekends: {CAFE_INFO.hours.weekends}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent mb-6" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[var(--cream)]/60 text-xs">
          <p>© {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.</p>
          <p className="text-[var(--gold)]/80">
            Artisanal Craft by Prratik · 6 Cozy Tables
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
