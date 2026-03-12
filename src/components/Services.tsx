'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Wind,
  ArrowUpRight,
  ChevronRight,
  Wrench,
  Droplets,
  CircleDashed,
  ThermometerSnowflake
} from 'lucide-react';

const services = [
  {
    title: 'Техническое обслуживание',
    description: 'Комплексная проверка всех систем автомобиля и замена расходных материалов.',
    icon: Wrench,
    price: 'от 2 500 ₽',
  },
  {
    title: 'Замена масла',
    description: 'Используем только оригинальные премиальные масла ROLF для долгой жизни вашего двигателя.',
    icon: Droplets,
    price: 'от 1 500 ₽',
  },
  {
    title: 'Тормозная система',
    description: 'Замена колодок, дисков и обслуживание суппортов для вашей безопасности.',
    icon: CircleDashed,
    price: 'от 2 000 ₽',
  },
  {
    title: 'Промывка радиаторов',
    description: 'Очистка системы охлаждения: удаление накипи, отложений и ржавчины. Обеспечивает оптимальный температурный режим двигателя, предотвращая перегрев и продлевая срок его службы.',
    icon: ThermometerSnowflake,
    price: 'от 3 500 ₽',
  },
  {
    title: 'Кондиционирование',
    description: 'Обслуживание и заправка систем кондиционирования автомобиля.',
    icon: Wind,
    price: 'от 1 200 ₽',
  },
  {
    title: 'Диагностика двигателя',
    description: 'Выявление скрытых неисправностей с помощью современного оборудования.',
    icon: Activity,
    price: 'от 1 000 ₽',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Top Gradient Transition from Black Hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-white pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-sm font-museo-900 text-primary mb-4">Наши услуги</h2>
            <p className="text-4xl md:text-5xl font-museo-900 text-secondary leading-tight">
              Профессиональный уход за вашим <span className="text-primary underline decoration-4 underline-offset-8">автомобилем</span>
            </p>
          </div>
          <p className="text-gray-500 max-w-xs text-sm">
            Мы предлагаем полный спектр услуг по ремонту и обслуживанию легковых автомобилей любых марок.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-gray-100 bg-muted/30 hover:bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>

              <div className="mb-6 inline-flex p-4 bg-white shadow-sm rounded-sm group-hover:scale-110 transition-transform duration-500 w-16 h-16 items-center justify-center">
                <service.icon strokeWidth={2.5} size={28} className="text-secondary" />
              </div>

              <h3 className="text-xl font-museo-900 text-secondary mb-4 flex items-center !normal-case tracking-normal">
                {service.title}
                <ArrowUpRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-museo-300">
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Стоимость</span>
                <span className="text-lg font-black text-secondary">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#booking"
            className="inline-flex items-center text-secondary font-black border-b-2 border-primary pb-1 hover:text-primary transition-colors group"
          >
            Смотреть все услуги
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Gradient Transition to Black BrandingShowcase */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary to-white pointer-events-none"></div>
    </section>
  );
};

export default Services;
