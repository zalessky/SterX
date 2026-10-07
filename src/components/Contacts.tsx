'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import ChatCards from '@/components/ChatCards';
import { MAX_URL } from '@/lib/messengers';

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-sm font-museo-900 text-primary mb-6">Контакты</h2>
            <h3 className="text-4xl md:text-5xl font-museo-900 text-secondary leading-tight mb-12">
              Ждем вас в <span className="text-primary italic">нашем</span> сервисе
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 md:mb-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <MapPin size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Адрес</span>
                </div>
                <p className="text-gray-600 font-medium text-lg">г. Энгельс,<br />Проспект Химиков, 33В</p>
              </div>

              {/* Телефон; на широком экране под ним кнопки мессенджеров (занимает две строки) */}
              <div className="space-y-4 md:row-span-2">
                <div className="flex items-center space-x-3 text-primary">
                  <Phone size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Телефон</span>
                </div>
                <a href="tel:+79271358899" className="block text-gray-600 font-bold text-lg hover:text-primary transition-colors">
                  +7 (927) 135-88-99
                </a>
                <div className="hidden md:block pt-2">
                  <ChatCards />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Clock size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Время работы</span>
                </div>
                <p className="text-gray-600 font-medium text-lg italic">Пн–Пт<br />с 09:00 до 18:00</p>
              </div>
            </div>

            {/* На телефоне кнопки мессенджеров — отдельным блоком под контактами */}
            <div className="md:hidden p-8 bg-muted rounded-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-secondary">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Напишите нам</p>
                  <p className="font-bold">{MAX_URL ? 'Мы в Telegram и MAX' : 'Мы в Telegram'}</p>
                </div>
              </div>
              <ChatCards className="mt-6" />
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-muted overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=46.155818%2C51.467792&z=16&pt=46.155818%2C51.467792,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Yandex Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
