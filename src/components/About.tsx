'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary opacity-20 -z-10 rounded-sm"></div>
            <img
              src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1000&auto=format&fit=crop"
              alt="Our Workshop"
              className="rounded-sm shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 text-white z-20 rounded-sm shadow-xl hidden sm:block">
              <p className="text-primary text-4xl font-black mb-1">100%</p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">Проверка запчастей</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">О компании</h2>
            <h3 className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-8">
              Более <span className="text-primary">20 лет</span> заботимся о вашей безопасности
            </h3>

            <div className="space-y-6 text-gray-500 leading-relaxed font-light">
              <p>
                СТО ROLF в Энгельсе — это современный технический центр, специализирующийся на профессиональном обслуживании легковых автомобилей. Мы объединили многолетний опыт наших мастеров с инновационными технологиями смазочных материалов ROLF.
              </p>
              <p>
                Наша миссия — обеспечить каждому автовладельцу уверенность в своем автомобиле. Мы используем только проверенные запасные части и строго соблюдаем регламенты заводов-изготовителей.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-primary w-8"></div>
                <span className="text-secondary font-bold text-sm">Профессиональное оборудование</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-primary w-8"></div>
                <span className="text-secondary font-bold text-sm">Сертифицированные масла ROLF</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-primary w-8"></div>
                <span className="text-secondary font-bold text-sm">Гарантия на все виды работ</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-primary w-8"></div>
                <span className="text-secondary font-bold text-sm">Комфортная зона ожидания</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
