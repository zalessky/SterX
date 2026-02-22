'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none text-secondary">
              ROLF
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary/60 leading-none">
              Service
            </span>
          </div>
          <div className="h-8 w-[2px] bg-primary"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider">Энгельс</span>
            <span className="text-[10px] text-gray-500">Автосервис</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>

        {/* Contact info & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+79271358899" className="flex items-center space-x-2 text-sm font-bold">
            <Phone size={18} className="text-primary fill-primary" />
            <span>+7 (927) 135-88-99</span>
          </a>
          <a
            href="#booking"
            className="bg-primary hover:bg-primary/90 text-secondary px-6 py-2.5 rounded-sm font-bold text-sm transition-all shadow-md active:scale-95"
          >
            Записаться
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute w-full shadow-xl">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-lg font-medium border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#about" className="text-lg font-medium border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>О компании</a>
            <a href="#contacts" className="text-lg font-medium border-b border-gray-50 pb-2" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <div className="flex flex-col space-y-4 pt-4">
              <a href="tel:+79271358899" className="flex items-center space-x-3 text-lg font-bold">
                <Phone size={20} className="text-primary fill-primary" />
                <span>+7 (927) 135-88-99</span>
              </a>
              <a
                href="#booking"
                className="bg-primary text-secondary text-center py-3 rounded-sm font-bold shadow-md"
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
