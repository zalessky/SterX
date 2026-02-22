'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const TelegramButton = () => {
  return (
    <motion.a
      href="https://t.me/Rolf64"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#0088cc] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      title="Написать в Telegram"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-sm text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
        Есть вопросы? Пишите!
      </span>
    </motion.a>
  );
};

export default TelegramButton;
