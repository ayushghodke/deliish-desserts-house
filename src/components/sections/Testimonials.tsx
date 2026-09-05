'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-gradient-to-b from-[#4A0404] via-[#350202] to-[#240101]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.25em] mb-3"
          >
            Verified Guest Reviews
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--cream)] mb-4">
            Loved by Dessert Enthusiasts
          </h2>
          <p className="max-w-xl mx-auto text-[var(--cream)]/75 text-sm md:text-base">
            Honest love from our patrons who tasted the original recipes and experienced the warm hospitality.
          </p>
        </div>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => {
            const initial = testimonial.name.charAt(0);
            return (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-[#3D0303]/60 backdrop-blur-md border border-[var(--gold)]/20 rounded-3xl p-7 flex flex-col justify-between hover:border-[var(--gold)]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_15px_rgba(212,168,67,0.2)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-[var(--gold)] opacity-70" />
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < testimonial.rating
                              ? 'fill-[var(--gold)] text-[var(--gold)]'
                              : 'fill-transparent text-[var(--warm-grey)]/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--cream)]/90 italic text-sm md:text-base mb-6 leading-relaxed">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3.5 pt-4 border-t border-[var(--gold)]/15 mt-auto">
                  {/* Styled Gold Monogram Avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[var(--maroon)] to-[var(--gold)] text-[var(--cream)] flex items-center justify-center font-serif font-bold text-lg border border-[var(--gold)]/50 shadow-md shrink-0">
                    {initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-[var(--cream)] text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--gold)]/80 text-[11px] font-medium">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
