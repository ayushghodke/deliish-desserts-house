'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Wallet, CreditCard, CheckCircle, Clock } from 'lucide-react';
import { TIME_SLOTS } from '@/lib/constants';

export default function Reservation() {
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request submitted! You will receive a confirmation soon.');
  };

  return (
    <section id="reserve" className="py-24 px-4 bg-deep-red relative w-full max-w-full overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-maroon/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest font-semibold block mb-4">
            Reserve a Table
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-cream">
            Book Your Sweet Escape
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-5 sm:p-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gold/50 py-3 text-cream placeholder:text-warm-grey focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-gold/50 py-3 text-cream placeholder:text-warm-grey focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="date"
                      required
                      className="w-full bg-transparent border-b border-gold/50 py-3 text-cream focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <select
                      required
                      defaultValue=""
                      className="w-full bg-transparent border-b border-gold/50 py-3 text-cream focus:outline-none focus:border-gold transition-colors appearance-none [&>option]:bg-maroon"
                    >
                      <option value="" disabled className="text-warm-grey">Number of Guests</option>
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-cream mb-4">Select Time</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((time: string) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedSlot(time)}
                        className={`py-2 px-3 rounded text-sm transition-colors ${
                          selectedSlot === time
                            ? 'bg-gold text-maroon font-semibold'
                            : 'border border-gold/30 text-cream hover:border-gold/60'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="bg-gold text-maroon font-bold rounded-full w-full py-3 text-lg hover:bg-gold/90 transition-colors"
                  >
                    Reserve Now — ₹200 Deposit
                  </button>
                  <p className="text-warm-grey text-xs text-center mt-3">
                    Deposit will be applied as credit to your bill
                  </p>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-heading text-cream mb-8">Reservation Policy</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Wallet className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-cream font-semibold">₹200 Refundable Deposit</h4>
                  <p className="text-warm-grey text-sm">Required per table to secure your booking.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CreditCard className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-cream font-semibold">Bill Credit</h4>
                  <p className="text-warm-grey text-sm">Deposit is directly applied as a credit to your final bill.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-cream font-semibold">Owner Confirmation</h4>
                  <p className="text-warm-grey text-sm">You will receive confirmation within 30 minutes of booking.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-cream font-semibold">Free Cancellation</h4>
                  <p className="text-warm-grey text-sm">Cancel up to 2 hours before your slot for a full refund.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-gold/30">
              <span className="font-heading text-6xl">❦</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
