# ROLF Auto Service Landing Page

This is a modern, responsive landing page for ROLF Auto Service, built with Next.js 14, Tailwind CSS 4, and Framer Motion.

## Features
- Responsive design (Mobile & Desktop)
- Branding with ROLF Motor Oil
- Services section
- Booking form placeholder
- Yandex Maps integration
- Telegram contact button

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Ubuntu Deployment Instructions / Инструкции по развертыванию на Ubuntu

#### English
1. **Update System:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
2. **Install Node.js (via NVM recommended):**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install 20
   ```
3. **Clone and Setup:**
   ```bash
   git clone <repository-url>
   cd rolf-landing
   npm install
   ```
4. **Build and Start with PM2:**
   ```bash
   npm run build
   sudo npm install -g pm2
   pm2 start npm --name "rolf-landing" -- start
   pm2 save
   pm2 startup
   ```

#### Русский
1. **Обновление системы:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
2. **Установка Node.js (рекомендуется через NVM):**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install 20
   ```
3. **Клонирование и настройка:**
   ```bash
   git clone <repository-url>
   cd rolf-landing
   npm install
   ```
4. **Сборка и запуск через PM2:**
   ```bash
   npm run build
   sudo npm install -g pm2
   pm2 start npm --name "rolf-landing" -- start
   pm2 save
   pm2 startup
   ```
