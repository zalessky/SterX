'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const BrandingShowcase = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-museo-900 text-primary mb-6">Официальный партнер</h2>
            <h3 className="text-4xl md:text-5xl font-museo-900 text-white leading-tight mb-8">
              Энергия <span className="text-primary italic">ROLF</span> для вашего двигателя
            </h3>

            <p className="text-white/70 text-lg mb-10 leading-relaxed font-museo-300">
              Мы используем премиальную линейку масел ROLF, разработанную с применением инновационных технологий. Это гарантирует максимальную защиту двигателя в экстремальных условиях.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Снижение трения и износа деталей',
                'Превосходная текучесть при низких температурах',
                'Защита от нагара и лаковых отложений',
                'Оптимальный интервал замены'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/90 font-medium">
                  <CheckCircle2 size={20} className="text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 p-6 bg-white/5 border border-white/10 rounded-sm">
              <img
                src="/rolf_outlined.svg"
                alt="ROLF Logo"
                className="h-10 opacity-80"
              />
              <div className="h-10 w-[1px] bg-white/20"></div>
              <p className="text-xs text-white/50 uppercase tracking-widest leading-snug">
                Официальный дилер <br /> смазочных материалов
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary opacity-20 blur-[100px] rounded-full"></div>
            <img
              src="/323105.png"
              alt="ROLF GT 5W-30"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)]"
            />

            {/* Float badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-10 z-20 bg-white p-4 shadow-2xl rounded-sm hidden md:block"
            >
              <div className="text-secondary font-black text-2xl">Ultra</div>
              <div className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">Technology</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-10 z-20 bg-primary p-4 shadow-2xl rounded-sm hidden md:block"
            >
              <div className="text-secondary font-black text-2xl">5W-30</div>
              <div className="text-secondary/60 text-[10px] uppercase font-bold tracking-tighter">Viscosity</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandingShowcase;
