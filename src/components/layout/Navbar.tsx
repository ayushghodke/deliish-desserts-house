'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import clsx from 'clsx';
import { NAV_LINKS, CAFE_INFO } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300',
          isScrolled ? 'backdrop-blur-xl bg-[#4A0404]/90 py-2.5 shadow-2xl border-b border-[#D4A843]/20' : 'bg-transparent py-4'
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--gold)] shadow-[0_0_12px_rgba(212,168,67,0.4)] group-hover:scale-105 transition-transform shrink-0">
              <Image
                src={CAFE_INFO.logo}
                alt={CAFE_INFO.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-[var(--gold)] font-bold tracking-wider leading-none">
                Deliish
              </span>
              <span className="text-[10px] md:text-xs text-[var(--cream)]/80 tracking-[0.2em] uppercase font-sans mt-0.5">
                Desserts House
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-[var(--cream)] hover:text-[var(--gold)] text-xs uppercase tracking-widest transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-4 py-2 hover:bg-[var(--gold)]/10 transition-colors"
            >
              <Phone size={14} />
              <span>{CAFE_INFO.phone}</span>
            </a>
            <Link
              href="#reserve"
              onClick={(e) => handleScrollToSection(e, '#reserve')}
              className="bg-[var(--gold)] text-[var(--maroon)] rounded-full px-5 py-2 text-xs uppercase tracking-wider font-bold hover:bg-[#E5C065] transition-all shadow-[0_0_15px_rgba(212,168,67,0.3)] hover:scale-105"
            >
              Reserve Table
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[var(--gold)] p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#4A0404] z-50 p-6 lg:hidden shadow-2xl flex flex-col border-l border-[var(--gold)]/30"
            >
              <div className="flex items-center justify-between pb-6 border-b border-[var(--gold)]/20">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--gold)]">
                    <Image src={CAFE_INFO.logo} alt={CAFE_INFO.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[var(--gold)] font-bold text-lg leading-none">Deliish</h3>
                    <p className="text-[10px] text-[var(--cream)]/70 uppercase tracking-wider">Desserts House</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--gold)] p-2 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>

              <div className="flex flex-col gap-5 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-[var(--cream)] text-lg font-serif hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-[var(--gold)]/20 flex flex-col gap-3">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 border border-[var(--gold)]/50 text-[var(--gold)] rounded-full py-3 text-sm font-semibold"
                >
                  <Phone size={16} />
                  Call: {CAFE_INFO.phone}
                </a>
                <Link
                  href="#reserve"
                  onClick={(e) => handleScrollToSection(e, '#reserve')}
                  className="bg-[var(--gold)] text-[var(--maroon)] rounded-full py-3 font-bold text-center text-sm uppercase tracking-wider shadow-lg"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
