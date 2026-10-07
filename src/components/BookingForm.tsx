'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone } from 'lucide-react';
import ChatCards from '@/components/ChatCards';
import { buildBookingText, sendBooking } from '@/lib/booking';
import { MAX_URL } from '@/lib/messengers';

type Status = 'idle' | 'sending' | 'sent' | 'fallback';

const BookingForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [website, setWebsite] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Техническое обслуживание (ТО)',
    comment: ''
  });

  const message = buildBookingText(formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Скрытое поле заполняют только спам-боты — делаем вид, что всё отправлено.
    if (website) {
      setStatus('sent');
      return;
    }

    // Заявка уходит в MAX. Если отправка не настроена или не удалась —
    // предлагаем позвонить или отправить заявку в мессенджер вручную.
    setStatus((await sendBooking(message)) ? 'sent' : 'fallback');
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData(prev => ({ ...prev, name: '', phone: '', comment: '' }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="booking" className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden rounded-sm flex flex-col md:flex-row">
          {/* Left Side: Info */}
          <div className="md:w-1/3 bg-secondary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-museo-900 mb-6">Запись на сервис</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8 font-museo-300">
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
            {status === 'fallback' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <h3 className="text-2xl font-black text-secondary mb-4">Остался один шаг</h3>
                <p className="text-gray-500 mb-8 max-w-sm">
                  Отправьте заявку в удобный мессенджер или позвоните нам — текст заявки уже подготовлен.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href="tel:+79271358899"
                    className="bg-primary text-secondary py-4 rounded-xl font-black flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                  >
                    <Phone size={18} className="mr-2" />
                    +7 (927) 135-88-99
                  </a>
                  <ChatCards
                    telegramText={message}
                    onMaxClick={() => navigator.clipboard?.writeText(message).catch(() => {})}
                  />
                </div>
                {MAX_URL && (
                  <p className="text-[10px] text-gray-400 mt-4 max-w-xs">
                    При переходе в MAX текст заявки копируется — просто вставьте его в чат.
                  </p>
                )}
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-secondary font-bold text-sm border-b border-primary hover:text-primary transition-colors"
                >
                  Вернуться к форме
                </button>
              </motion.div>
            ) : status === 'sent' ? (
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
                  onClick={resetForm}
                  className="mt-8 text-secondary font-bold text-sm border-b border-primary hover:text-primary transition-colors"
                >
                  Отправить еще одну
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ловушка для спам-ботов: поле скрыто от людей */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Ваше имя</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Телефон</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      pattern="(?:\D*\d){10,}\D*"
                      title="Номер телефона, например +7 927 123-45-67"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Услуга</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium appearance-none"
                  >
                    <option>Техническое обслуживание (ТО)</option>
                    <option>Промывка радиаторов</option>
                    <option>Диагностика</option>
                    <option>Замена масла</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Комментарий (опционально)</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Марка авто, год выпуска, описание проблемы..."
                    rows={4}
                    className="w-full px-4 py-4 bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all rounded-sm text-secondary font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="disabled:opacity-60 disabled:cursor-wait w-full bg-primary hover:bg-secondary hover:text-white text-secondary py-5 rounded-sm font-museo-900 text-lg transition-all flex items-center justify-center shadow-lg active:scale-[0.98]"
                >
                  {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
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

      {/* Bottom Gradient Transition to White Contacts */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default BookingForm;
