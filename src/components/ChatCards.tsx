import React from 'react';
import { MaxLogo, TelegramLogo } from '@/components/MessengerIcons';
import { MAX_URL, TELEGRAM_URL } from '@/lib/messengers';

const ChatCard = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-secondary border border-white/10 rounded-xl text-left hover:border-primary transition-colors"
  >
    <span className="w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden">{icon}</span>
    <span>
      <span className="block font-bold text-white leading-tight">{title}</span>
      <span className="block text-sm font-bold text-white/50">Открыть чат</span>
    </span>
  </a>
);

// Кнопки-карточки «Telegram / MAX — Открыть чат».
const ChatCards = ({ className = '' }: { className?: string }) => (
  <div className={`grid gap-3 ${className}`}>
    <ChatCard href={TELEGRAM_URL} title="Telegram" icon={<TelegramLogo className="w-full h-full" />} />
    {MAX_URL && <ChatCard href={MAX_URL} title="MAX" icon={<MaxLogo className="w-full h-full" />} />}
  </div>
);

export default ChatCards;
