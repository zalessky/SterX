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
            <Link href="/" className="flex items-center">
               <img src="/rolf.webp" alt="ROLF" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Ваш надежный партнер в мире автомобильного сервиса в Энгельсе. Качество ROLF — долголетие вашего двигателя.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white/40">Разделы</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a></li>
              <li><a href="#about" className="text-sm hover:text-primary transition-colors">О компании</a></li>
              <li><a href="#booking" className="text-sm hover:text-primary transition-colors">Запись на сервис</a></li>
              <li><a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a></li>
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
              <a
                href="https://vk.com/id1026636263"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm hover:bg-primary hover:text-secondary transition-all group"
                title="Мы ВКонтакте"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 group-hover:opacity-100 transition-opacity">
                  <path d="M15.072 2H8.928C3.12 2 2 3.12 2 8.928v6.144C2 20.88 3.12 22 8.928 22h6.144C20.88 22 22 20.88 22 15.072V8.928C22 3.12 20.88 2 15.072 2zm3.336 14.544h-1.632c-.528 0-.696-.408-1.656-1.344-.84-.816-1.224-.912-1.44-.912-.312 0-.408.096-.408.528v1.104c0 .336-.12.624-1.008.624-1.464 0-3.072-.888-4.224-2.52-1.704-2.424-2.184-4.248-2.184-4.584 0-.192.072-.384.456-.384h1.632c.336 0 .456.168.576.504.648 1.872 1.728 3.528 2.16 3.528.168 0 .24-.072.24-.48v-2.136c-.048-.912-.528-1.32-.864-1.32-.144 0-.24.024-.312.048.216-.672.768-.984 1.344-.984h1.272c.456 0 .576.24.576.768v2.688c0 .288.144.384.24.384.168 0 .312-.096.648-.432a9.38 9.38 0 001.368-2.376c.072-.168.192-.264.48-.264h1.632c.48 0 .6.12.6.384 0 .312-.36 1.392-1.656 2.808-.528.576-.648.792-.648 1.056 0 .24.12.48.576.912.864.816 1.152 1.224 1.248 1.584.096.384-.144.576-.576.576z"/>
                </svg>
              </a>
              <a
                href="https://t.me/Rolf64"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm hover:bg-primary hover:text-secondary transition-all group"
                title="Мы в Telegram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 group-hover:opacity-100 transition-opacity">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-white/20 font-museo-900 !normal-case tracking-widest">
          <p>© 2026 СТО ROLF. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
