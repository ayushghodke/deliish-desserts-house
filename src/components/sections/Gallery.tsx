'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, Sparkles, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  subtitle: string;
  span?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Signature Royal Rocher Crown',
    subtitle: 'Ferrero Rocher & Nutella Drip',
    category: 'Thick Shake',
    image: '/images/menu/ferrero-rocher.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Pistachio Kunafa Indulgence',
    subtitle: 'Crunchy Toasted Kataifi & Cream',
    category: 'Middle-Eastern Fusion',
    image: '/images/menu/pistachio-kunafa.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Lotus Biscoff Heaven',
    subtitle: 'Caramel Speculoos & Biscuit Crown',
    category: 'Signature Shake',
    image: '/images/menu/lotus-biscoff.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Gulab Jamun Brownie Fusion',
    subtitle: 'Warm Indian Mithai & Cold Brownie',
    category: 'Heritage Fusion',
    image: '/images/menu/gulab-jamun-brownie.jpg',
    span: 'col-span-1 row-span-2'
  },
  {
    id: 5,
    title: 'Fresh Alphonso Mango Delight',
    subtitle: 'Ratnagiri Mango Pulp & Diced Fruit',
    category: 'Fruit Thick Shake',
    image: '/images/menu/alphonso-mango.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    title: 'Deliish Signature Brownie Blast',
    subtitle: 'Founder Prratik’s Secret Recipe',
    category: 'Brownie Shake',
    image: '/images/menu/belgian-brownie.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 7,
    title: 'Official Deliish Emblem',
    subtitle: 'Made with Love, Served with Joy',
    category: 'Brand Identity',
    image: '/images/branding/logo.jpg',
    span: 'col-span-1 row-span-1'
  }
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 bg-[#380303] relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[#4A0404]/50 mb-3">
            <Sparkles size={14} className="text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-bold">
              Visual Masterpieces
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--cream)] mb-4">
            Studio Showcase
          </h2>
          <p className="max-w-xl mx-auto text-[var(--cream)]/80 text-sm md:text-base">
            Clean studio captures of our signature handcrafted shakes and house specialties. Consistent elegance in every single detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[240px] md:auto-rows-[260px]">
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveImage(item)}
              className={`relative rounded-3xl overflow-hidden border border-[var(--gold)]/30 group cursor-pointer shadow-xl bg-[#230101] ${item.span || 'col-span-1 row-span-1'}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Elegant Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2A0202]/85 text-[var(--gold)] border border-[var(--gold)]/40 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-lg md:text-xl text-[var(--cream)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--cream)]/75 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[var(--gold)] text-[var(--maroon)] flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ZoomIn size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setActiveImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#2A0202] border-2 border-[var(--gold)] rounded-3xl overflow-hidden shadow-2xl p-4"
              >
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-[var(--gold)]/30">
                  <div>
                    <h3 className="font-heading text-xl text-[var(--gold)]">{activeImage.title}</h3>
                    <p className="text-xs text-[var(--cream)]/80">{activeImage.subtitle} · {activeImage.category}</p>
                  </div>
                  <button
                    onClick={() => setActiveImage(null)}
                    className="text-[var(--gold)] p-1.5 rounded-full hover:bg-[var(--gold)]/20 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-black">
                  <Image
                    src={activeImage.image}
                    alt={activeImage.title}
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
