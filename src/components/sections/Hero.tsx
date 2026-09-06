'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CAFE_INFO } from '@/lib/constants';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full max-w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#350202] via-[#4A0404] to-[#680606] pt-24 pb-16">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(212,168,67,0.25)_0%,_transparent_60%)] pointer-events-none" />

      {/* Floating decorative light sparkles */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[15%] w-3 h-3 rounded-full bg-[var(--gold)] blur-[1px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 22, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[18%] w-4 h-4 rounded-full bg-[var(--gold)] blur-[2px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 right-[28%] w-2 h-2 rounded-full bg-[var(--gold)] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto"
      >
        {/* Official Logo Centerpiece */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-[var(--gold)] via-[#FFF8F0] to-[var(--gold)] shadow-[0_0_35px_rgba(212,168,67,0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={CAFE_INFO.logo}
                alt={CAFE_INFO.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2A0202] border border-[var(--gold)]/40 text-[var(--gold)] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1">
            <Sparkles size={11} className="text-[var(--gold)]" />
            Original Recipes
          </div>
        </motion.div>

        {/* Brand Pill - mobile optimized */}
        <motion.div variants={itemVariants} className="mb-4 w-full max-w-full px-2 flex justify-center">
          <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--gold)]/40 bg-[var(--maroon)]/80 backdrop-blur-md text-[var(--gold)] text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase max-w-full text-center">
            <span className="shrink-0">✨</span>
            <span className="truncate sm:overflow-visible">Artisanal Thick Shakes & Dessert House</span>
            <span className="shrink-0">✨</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--cream)] mb-4 leading-tight break-words max-w-full">
          <span className="bg-gradient-to-r from-[#D4A843] via-[#FFEBB3] to-[#D4A843] bg-clip-text text-transparent">
            Deliish
          </span>{' '}
          Desserts House
        </motion.h1>

        {/* Official Tagline */}
        <motion.p variants={itemVariants} className="text-lg sm:text-2xl md:text-3xl font-serif text-[var(--gold)] italic mb-6 px-2">
          &ldquo;{CAFE_INFO.tagline}&rdquo;
        </motion.p>

        {/* Story Snippet */}
        <motion.p variants={itemVariants} className="max-w-2xl text-[var(--cream)]/85 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 px-2">
          Founded by <span className="text-[var(--gold)] font-semibold">Prratik</span>, an independent dessert artisan who discovered his own secret recipes. Experience 50+ unique handcrafted thick shakes, brownie blasts, and mithai fusions across 6 cozy tables.
        </motion.p>

        {/* Action Buttons - responsive stack on mobile */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-xs sm:max-w-none px-2">
          <Link
            href="#menu"
            className="group flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--maroon)] px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#E5C065] transition-all duration-300 shadow-[0_0_20px_rgba(212,168,67,0.35)] hover:scale-105 text-center"
          >
            <span>Explore Menu</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#reserve"
            className="border-2 border-[var(--gold)] text-[var(--gold)] px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[var(--gold)]/10 transition-all duration-300 hover:scale-105 text-center"
          >
            Book Table (6 Tables)
          </Link>

          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity shadow-lg text-center"
          >
            <span>Instagram</span>
          </a>
        </motion.div>

        {/* Highlights Strip */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6 w-full max-w-3xl pt-4 border-t border-[var(--gold)]/20 text-center">
          <div className="p-1 sm:p-2">
            <span className="text-xl sm:text-2xl font-bold font-heading text-[var(--gold)]">6</span>
            <p className="text-[10px] sm:text-xs text-[var(--cream)]/70 uppercase tracking-wider">Intimate Tables</p>
          </div>
          <div className="p-1 sm:p-2">
            <span className="text-xl sm:text-2xl font-bold font-heading text-[var(--gold)]">50+</span>
            <p className="text-[10px] sm:text-xs text-[var(--cream)]/70 uppercase tracking-wider">Original Recipes</p>
          </div>
          <div className="p-1 sm:p-2">
            <span className="text-xl sm:text-2xl font-bold font-heading text-[var(--gold)]">₹59</span>
            <p className="text-[10px] sm:text-xs text-[var(--cream)]/70 uppercase tracking-wider">Starts From</p>
          </div>
          <div className="p-1 sm:p-2">
            <span className="text-xl sm:text-2xl font-bold font-heading text-[var(--gold)]">100%</span>
            <p className="text-[10px] sm:text-xs text-[var(--cream)]/70 uppercase tracking-wider">Pure Indulgence</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[var(--gold)] opacity-75 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
