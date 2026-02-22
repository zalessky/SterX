'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the data to a server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden rounded-sm flex flex-col md:flex-row">
          {/* Left Side: Info */}
          <div className="md:w-1/3 bg-secondary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-6">Запись на сервис</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Оставьте заявку, и наш мастер свяжется с вами в течение 15 минут для уточнения деталей и времени визита.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold pt-2">Заявка</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">02</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold pt-2">Звонок мастера</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">03</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold pt-2">Визит в СТО</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-black">Позвоните нам</p>
              <a href="tel:+79271358899" className="text-xl font-black text-primary hover:text-white transition-colors">
                +7 (927) 135-88-99
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-2/3 p-12 bg-white relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">Спасибо за заявку!</h3>
                <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-secondary font-bold text-sm border-b border-primary hover:text-primary transition-colors"
                >
                  Отправить еще одну
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Ваше имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Услуга</label>
                  <select className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium appearance-none">
                    <option>Техническое обслуживание (ТО)</option>
                    <option>Ремонт двигателя</option>
                    <option>Диагностика</option>
                    <option>Замена масла</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Комментарий (опционально)</label>
                  <textarea
                    placeholder="Марка авто, год выпуска, описание проблемы..."
                    rows={4}
                    className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary hover:text-white text-secondary py-5 rounded-sm font-black text-lg transition-all flex items-center justify-center shadow-lg active:scale-[0.98]"
                >
                  Отправить заявку
                  <Send size={18} className="ml-2" />
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
