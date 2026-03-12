'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        {/* Logo Left */}
        <Link href="/" className="flex items-center h-full py-4">
          <img src="/images/r-service.webp" alt="ROLF Service" className="h-full w-auto object-contain" />
        </Link>

        {/* Desktop Nav & Contacts */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-brand-yellow transition-colors uppercase tracking-wider">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-brand-yellow transition-colors uppercase tracking-wider">О компании</a>
            <a href="#contacts" className="text-sm font-medium hover:text-brand-yellow transition-colors uppercase tracking-wider">Контакты</a>
          </nav>

          <div className="h-8 w-px bg-white/20"></div>

          <div className="flex items-center space-x-6">
            <a href="tel:+79271358899" className="flex items-center space-x-2 text-sm font-bold hover:text-brand-yellow transition-colors">
              <Phone size={16} className="text-brand-yellow" />
              <span>+7 (927) 135-88-99</span>
            </a>
            <a
              href="#booking"
              className="bg-brand-yellow hover:bg-white text-black px-6 py-2 font-bold text-xs uppercase tracking-tighter transition-all"
            >
              Записаться
            </a>
          </div>
        </div>

        {/* Logo Right in Yellow Block with Slant */}
          <div className="hidden md:flex h-full relative w-[220px] flex-shrink-0 ml-12">
            {/* Желтый фон: уменьшили наклон (20px) и убрали нахлест на кнопку */}
            <div 
              className="absolute inset-y-0 left-0 bg-brand-yellow z-0" 
              style={{ 
                clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%)',
                right: '-100vw' 
              }}
            ></div>
            
            {/* Логотип: теперь он четко позиционирован внутри своего пространства */}
            <div className="relative z-10 w-full flex justify-start pl-10 pt-[14px]">
              <img 
                src="/images/rolf.webp" 
                alt="ROLF" 
                className="w-[136px] h-[52px] object-contain" 
              />
            </div>
          </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 p-4 absolute w-full shadow-xl">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-lg font-medium border-b border-white/10 pb-2" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#about" className="text-lg font-medium border-b border-white/10 pb-2" onClick={() => setIsMenuOpen(false)}>О компании</a>
            <a href="#contacts" className="text-lg font-medium border-b border-white/10 pb-2" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <div className="flex flex-col space-y-4 pt-4">
              <a href="tel:+79271358899" className="flex items-center space-x-3 text-lg font-bold text-brand-yellow">
                <Phone size={20} className="fill-brand-yellow" />
                <span>+7 (927) 135-88-99</span>
              </a>
              <a
                href="#booking"
                className="bg-brand-yellow text-black text-center py-3 font-bold uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Записаться на сервис
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
