'use client';

import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Контакты</h2>
            <h3 className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-12">
              Ждем вас в <span className="text-primary italic">нашем</span> сервисе
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <MapPin size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Адрес</span>
                </div>
                <p className="text-gray-600 font-medium">г. Энгельс,<br />просп. Химиков, 33В</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Phone size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Телефон</span>
                </div>
                <p className="text-gray-600 font-bold text-lg">+7 (927) 135-88-99</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Clock size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Время работы</span>
                </div>
                <p className="text-gray-600 font-medium">Ежедневно<br />с 09:00 до 20:00</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Mail size={24} />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Email</span>
                </div>
                <p className="text-gray-600 font-medium">info@rolf-service.ru</p>
              </div>
            </div>

            <div className="p-8 bg-muted rounded-sm flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Напишите нам</p>
                  <p className="font-bold">Мы в Telegram</p>
                </div>
              </div>
              <a
                href="https://t.me/rolf_service_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-3 rounded-sm font-bold hover:bg-primary hover:text-secondary transition-all"
              >
                Чат с мастером
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-muted overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=46.124564%2C51.468234&z=16&pt=46.124564%2C51.468234,pm2rdm"
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
