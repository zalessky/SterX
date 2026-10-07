import React from 'react';
import { Phone } from 'lucide-react';
import { MaxLogo, TelegramLogo } from '@/components/MessengerIcons';
import { MAX_URL, TELEGRAM_URL } from '@/lib/messengers';

const itemClass =
  'flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary transition-colors';
const labelClass = 'text-xs font-bold text-white';

// Быстрая связь: позвонить, Telegram, MAX — компактный ряд для тёмного блока записи.
const QuickContacts = ({ className = '' }: { className?: string }) => (
  <div className={`grid ${MAX_URL ? 'grid-cols-3' : 'grid-cols-2'} gap-2 ${className}`}>
    <a href="tel:+79271358899" className={itemClass}>
      <span className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center">
        <Phone size={20} />
      </span>
      <span className={labelClass}>Позвонить</span>
    </a>
    <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={itemClass}>
      <span className="w-10 h-10 rounded-xl overflow-hidden">
        <TelegramLogo className="w-full h-full" />
      </span>
      <span className={labelClass}>Telegram</span>
    </a>
    {MAX_URL && (
      <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className={itemClass}>
        <span className="w-10 h-10 rounded-xl overflow-hidden">
          <MaxLogo className="w-full h-full" />
        </span>
        <span className={labelClass}>MAX</span>
      </a>
    )}
  </div>
);

export default QuickContacts;
