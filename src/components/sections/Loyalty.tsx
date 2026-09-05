"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Star, Crown } from "lucide-react";

export default function Loyalty() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const tiers = [
    {
      name: "Bronze",
      points: "0-100 Points",
      perks: ["5% off every order"],
      icon: <Star className="w-8 h-8 text-[var(--gold)] mb-4" />,
      highlight: false,
    },
    {
      name: "Silver",
      points: "100-500 Points",
      perks: ["10% off", "Birthday treat"],
      icon: <Gift className="w-8 h-8 text-gray-400 mb-4" />,
      highlight: false,
    },
    {
      name: "Gold",
      points: "500+ Points",
      perks: ["15% off", "Priority booking", "Exclusive menu"],
      icon: <Crown className="w-8 h-8 text-[var(--gold)] mb-4" />,
      highlight: true,
    },
  ];

  const features = [
    "🎂 Birthday Rewards",
    "👥 Refer & Earn",
    "📱 100% Digital",
    "⭐ Exclusive Access",
  ];

  return (
    <section id="loyalty" className="py-24 px-4 bg-gradient-to-b from-[var(--deep-red)] to-[var(--maroon)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--gold)] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--gold)] blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            Loyalty Rewards
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-[var(--cream)]"
          >
            Every Visit is Rewarding
          </motion.h2>
        </div>

        {/* Digital Loyalty Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto mb-20 perspective-1000"
        >
          <div className="bg-gradient-to-br from-[var(--maroon)] to-[var(--deep-red)] border-2 border-[var(--gold)] rounded-3xl p-8 shadow-2xl transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12 hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading text-[var(--gold)] mb-2">Deliish Rewards</h3>
              <p className="text-[var(--warm-grey)] text-sm">Collect 10 stamps, get a FREE dessert!</p>
            </div>
            
            <div className="grid grid-cols-5 gap-3 mb-8">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="aspect-square rounded-full flex items-center justify-center relative">
                  {i < 4 ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      className="w-full h-full bg-[var(--gold)] rounded-full flex items-center justify-center shadow-[0_0_15px_var(--gold)]"
                    >
                      <Star className="w-5 h-5 text-[var(--maroon)]" fill="currentColor" />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full border-2 border-dashed border-[var(--gold)] border-opacity-40 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center text-[var(--warm-grey)] text-xs border-t border-[var(--gold)] border-opacity-20 pt-4">
              <span>Member since 2026</span>
              <span className="uppercase tracking-wider">Your Name Here</span>
            </div>
          </div>
        </motion.div>

        {/* Reward Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl p-6 text-center flex flex-col items-center bg-[var(--maroon)] bg-opacity-50 backdrop-blur-sm border ${tier.highlight ? 'border-[var(--gold)] shadow-[0_0_20px_rgba(212,168,67,0.15)] transform md:-translate-y-4' : 'border-white/10'}`}
            >
              {tier.icon}
              <h4 className="text-xl font-heading text-[var(--cream)] mb-1">{tier.name}</h4>
              <p className="text-[var(--gold)] text-sm font-bold mb-4">{tier.points}</p>
              <ul className="space-y-2 text-[var(--warm-grey)] text-sm flex-grow flex flex-col justify-center">
                {tier.perks.map((perk, pIndex) => (
                  <li key={pIndex}>{perk}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Features List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-[var(--gold)] border-opacity-30 rounded-full px-6 py-2 text-[var(--cream)] text-sm bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
