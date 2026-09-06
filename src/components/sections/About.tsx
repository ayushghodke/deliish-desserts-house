'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Coffee, Utensils, HeartHandshake, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/lib/constants';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Coffee, label: 'Tables Available', value: '6' },
    { icon: Utensils, label: 'Original Recipes', value: '50+' },
    { icon: HeartHandshake, label: 'Personal Craft', value: '100%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 px-4 bg-[#3E0303] overflow-hidden w-full max-w-full" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Column: Official Brand Crest & Menu Showcase */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none group">
              {/* Decorative Gold Frame */}
              <div className="hidden sm:block absolute inset-0 border-2 border-[var(--gold)]/60 rounded-3xl sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 pointer-events-none" />
              
              {/* Main Card Container */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2A0202] to-[#4A0404] p-4 flex flex-col items-center justify-center border border-[var(--gold)]/30">
                <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-inner">
                  <Image 
                    src={CAFE_INFO.logo}
                    alt="Deliish Desserts House Official Emblem"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
                    Official Brand Identity
                  </span>
                  <p className="text-[11px] text-[var(--cream)]/70 italic mt-0.5">
                    &ldquo;Made with Love, Served with Joy&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#200101] border-2 border-[var(--gold)] rounded-2xl p-4 shadow-xl z-20 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--maroon)] flex items-center justify-center font-bold">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">Founder-Led</h4>
                  <p className="text-xs text-[var(--cream)]">Curated by Prratik</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            <span className="text-[var(--gold)] text-xs uppercase tracking-[0.25em] font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--gold)]" />
              Our Story & Heritage
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[var(--cream)] mb-6 leading-tight">
              A Symphony of Flavors Born From Passion
            </h2>
            
            <div className="space-y-5 text-[var(--cream)]/85 text-base md:text-lg leading-relaxed mb-10">
              <p>
                Welcome to <span className="text-[var(--gold)] font-semibold">{CAFE_INFO.name}</span>, a boutique dessert haven founded by passionate dessert artisan <span className="text-[var(--gold)] font-semibold">{CAFE_INFO.owner}</span>. Unlike commercial chains, every single thick shake, dessert bowl, and fusion recipe here was discovered, tested, and perfected right in our kitchen.
              </p>
              <p>
                With just <span className="text-[var(--gold)] font-semibold">6 intimate tables</span>, our cafe offers an exclusive, cozy setting where you can pause time. Whether you crave the crunch of our <span className="text-[var(--cream)] font-medium">Pistachio Kunafa Shake</span>, the caramelized warmth of <span className="text-[var(--cream)] font-medium">Lotus Biscoff Heaven</span>, or the innovative brilliance of our <span className="text-[var(--cream)] font-medium">Gulab Jamun Brownie Fusion</span>, every order is crafted fresh for you.
              </p>
              <p className="text-sm italic text-[var(--gold)]/90 border-l-2 border-[var(--gold)] pl-4">
                &ldquo;We don&apos;t just serve desserts; we serve moments of connection, celebrations of taste, and genuine sweetness crafted with love.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={statVariants}
                  className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-[#2A0202]/60 border border-[var(--gold)]/20 shadow-lg"
                >
                  <stat.icon className="w-7 h-7 text-[var(--gold)] mb-2" />
                  <span className="font-heading text-2xl font-bold text-[var(--gold)]">{stat.value}</span>
                  <span className="text-xs text-[var(--cream)]/80 uppercase tracking-wider mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
