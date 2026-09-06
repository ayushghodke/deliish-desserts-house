'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory, MenuItem } from '@/lib/constants';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all-desserts');

  const filteredItems = activeCategory === 'all-desserts'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item: MenuItem) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-4 bg-[#2A0202] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[#3D0303]/60 mb-3">
            <Sparkles size={13} className="text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-bold">
              Original Secret Recipes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--cream)] mb-4">
            Handcrafted Menu
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--cream)]/80 text-sm md:text-base leading-relaxed">
            From ₹59 refreshing classics to ultra-luxury Ferrero Rocher crowns and Middle-Eastern Kunafa shakes. Handcrafted with real ingredients and unique tastes.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="w-full max-w-full overflow-x-auto no-scrollbar py-2 mb-12">
          <div className="flex items-center gap-2.5 px-4 min-w-max mx-auto justify-start lg:justify-center">
            {MENU_CATEGORIES.map((category: MenuCategory) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={clsx(
                    'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 select-none cursor-pointer',
                    isActive
                      ? 'bg-gradient-to-r from-[var(--gold)] via-[#E8C468] to-[var(--gold)] text-[#2A0202] font-bold shadow-[0_0_20px_rgba(212,168,67,0.35)] scale-105'
                      : 'bg-[#3D0303]/70 text-[var(--cream)]/80 hover:text-[var(--gold)] hover:bg-[#4E0505] border border-[var(--gold)]/20'
                  )}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-[#350202]/80 backdrop-blur-sm border border-[var(--gold)]/20 rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(212,168,67,0.25)] hover:border-[var(--gold)]/60 transition-all duration-300 group flex flex-col"
              >
                {/* Product Image Area with Consistent Studio Photography */}
                <div className="relative aspect-[4/3] bg-[#220101] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient bottom overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350202] via-transparent to-black/30 pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
                    {item.isBestSeller && (
                      <span className="bg-[var(--gold)] text-[var(--maroon)] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Star size={10} className="fill-[var(--maroon)]" />
                        Best Seller
                      </span>
                    )}
                  </div>

                  {/* Veg Indicator */}
                  <div className="absolute top-3 left-3 bg-[#111]/80 backdrop-blur-md p-1.5 rounded-md flex items-center justify-center border border-white/20 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 bg-[#240101]/90 backdrop-blur-md border border-[var(--gold)]/50 px-3 py-1 rounded-full z-10">
                    <span className="text-[var(--gold)] font-bold text-lg">₹{item.price}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-heading text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[var(--gold)] text-xs font-bold shrink-0 mt-1">
                      <Star size={13} className="fill-[var(--gold)]" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[var(--cream)]/75 line-clamp-2 mb-4 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 bg-white/5 border border-[var(--gold)]/20 text-[var(--cream)]/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-[var(--gold)]/15 flex items-center justify-between mt-auto">
                    <span className="text-[11px] text-[var(--gold)]/80 flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      Fresh Handcrafted
                    </span>
                    <a
                      href="#reserve"
                      className="text-xs uppercase tracking-wider font-semibold text-[var(--gold)] hover:text-white transition-colors"
                    >
                      Dine In (Table) →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
