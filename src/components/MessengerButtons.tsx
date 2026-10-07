'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MaxLogo } from '@/components/MessengerIcons';
import { MAX_URL } from '@/lib/messengers';

// Плавающая кнопка связи — только MAX. Пока ссылка на профиль MAX не задана, кнопки нет.
const MessengerButtons = () => {
  if (!MAX_URL) return null;

  return (
    <motion.a
      href={MAX_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[60] w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-2xl group"
      title="Написать в MAX"
    >
      <MaxLogo className="w-full h-full rounded-2xl" />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-secondary px-4 py-2 rounded-sm text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
        Написать в MAX
      </span>
    </motion.a>
  );
};

export default MessengerButtons;
