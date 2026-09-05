'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory, MenuItem } from '@/lib/constants';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all-desserts');
  const [showMenuCardModal, setShowMenuCardModal] = useState<boolean>(false);

  const filteredItems = activeCategory === 'all-desserts'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item: MenuItem) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-4 bg-[#2F0202]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--gold)]/30 bg-[#4A0404]/50 mb-3">
            <Sparkles size={14} className="text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-bold">
              Original Secret Recipes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--cream)] mb-4">
            Handcrafted Menu
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--cream)]/80 text-sm md:text-base">
            From ₹59 classics to ultra-luxury Ferrero Rocher crowns and Middle-Eastern Kunafa shakes. Real ingredients, thick cream, and unique tastes.
          </p>

          {/* View Physical Menu Card Button */}
          <div className="mt-5">
            <button
              onClick={() => setShowMenuCardModal(true)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--gold)] border border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-[var(--maroon)] px-5 py-2.5 rounded-full transition-all duration-300 shadow-md"
            >
              <FileText size={15} />
              <span>View Physical Menu Card</span>
            </button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex overflow-x-auto pb-4 mb-10 justify-start lg:justify-center gap-2.5 no-scrollbar">
          {MENU_CATEGORIES.map((category: MenuCategory) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={clsx(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 uppercase tracking-wider',
                  isActive
                    ? 'bg-[var(--gold)] text-[var(--maroon)] shadow-[0_0_15px_rgba(212,168,67,0.4)] scale-105'
                    : 'border border-[var(--gold)]/30 text-[var(--cream)] hover:border-[var(--gold)]/70 hover:bg-white/5'
                )}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            );
          })}
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
                className="bg-[#3D0303]/70 backdrop-blur-sm border border-[var(--gold)]/20 rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(212,168,67,0.3)] hover:border-[var(--gold)]/60 transition-all duration-300 group flex flex-col"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0303] via-transparent to-black/30 pointer-events-none" />

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

        {/* Modal for Physical Menu Card */}
        <AnimatePresence>
          {showMenuCardModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-[#2A0202] border-2 border-[var(--gold)] rounded-3xl p-4 overflow-auto shadow-2xl"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--gold)]/30">
                  <h3 className="font-heading text-lg text-[var(--gold)]">Official Printed Menu Card</h3>
                  <button
                    onClick={() => setShowMenuCardModal(false)}
                    className="text-[var(--gold)] text-sm px-3 py-1 border border-[var(--gold)]/40 rounded-full hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-colors"
                  >
                    Close ✕
                  </button>
                </div>
                <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-black">
                  <Image
                    src="/images/branding/menu-card.jpg"
                    alt="Official Deliish Desserts House Menu Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
