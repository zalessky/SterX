'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none text-white">
                  ROLF
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary leading-none">
                  Service
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Ваш надежный партнер в мире автомобильного сервиса. Качество ROLF — долголетие вашего двигателя.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/40">Разделы</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link href="#about" className="text-sm hover:text-primary transition-colors">О компании</Link></li>
              <li><Link href="#booking" className="text-sm hover:text-primary transition-colors">Запись на сервис</Link></li>
              <li><Link href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/40">Информация</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Пользовательское соглашение</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Гарантийные обязательства</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/40">Мы в сети</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-primary hover:text-secondary transition-all">
                VK
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-primary hover:text-secondary transition-all">
                TG
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-primary hover:text-secondary transition-all">
                YT
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-white/20 uppercase font-bold tracking-widest">
          <p>© 2024 СТО ROLF Энгельс. Все права защищены.</p>
          <p>Разработка: Jules Agent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
