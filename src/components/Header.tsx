'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { RServiceLogo } from './BrandingAssets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <RServiceLogo className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>

        {/* Contact info & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+79271358899" className="flex items-center space-x-2 text-sm font-museo-900 !italic-none !normal-case tracking-normal">
            <Phone size={18} className="text-primary fill-primary" />
            <span>+7 (927) 135-88-99</span>
          </a>
          <a
            href="#booking"
            className="bg-primary hover:bg-primary/90 text-secondary px-6 py-2.5 rounded-sm font-museo-900 text-sm transition-all shadow-md active:scale-95"
          >
            Записаться
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-secondary"
          aria-label="Toggle menu"
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
