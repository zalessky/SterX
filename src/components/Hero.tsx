'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden bg-secondary">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486006396123-c77547c945f7?q=80&w=2000&auto=format&fit=crop")'
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-[10px] font-black uppercase tracking-widest">Premium Service</span>
          </div>

          <div className="mt-[110px] ml-[0.4px] mb-8">
             <img
               src="/rolf.webp"
               alt="ROLF"
               className="w-[336.2px] h-[128px] object-contain"
             />
          </div>

          <h1 className="text-5xl md:text-7xl font-museo-900 text-white leading-tight mb-6">
            ПРОФЕССИОНАЛЬНЫЙ <br />
            <span className="text-primary">АВТОСЕРВИС</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-museo-300 max-w-lg">
            Профессиональное обслуживание вашего автомобиля с использованием премиальных моторных масел ROLF. Качество, которому доверяют эксперты.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#booking"
              className="bg-primary hover:bg-white text-secondary px-8 py-4 rounded-sm font-black text-lg transition-all flex items-center justify-center group shadow-lg"
            >
              Записаться сейчас
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="border-2 border-white/20 hover:border-primary text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center"
            >
              Наши услуги
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="text-primary text-2xl font-black mb-1">15+</div>
              <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Лет опыта</div>
            </div>
            <div>
              <div className="text-primary text-2xl font-black mb-1">100%</div>
              <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Гарантия качества</div>
            </div>
            <div className="hidden md:block">
              <div className="text-primary text-2xl font-black mb-1">3000+</div>
              <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Довольных клиентов</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ROLF Oil Canister floating element (visual branding) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 right-0 z-20 hidden lg:block w-1/3 p-10 select-none pointer-events-none"
      >
        <img
          src="/ultra.webp"
          alt="ROLF Oil"
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform -rotate-12"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
