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

## Релизы / Releases

Каждая версия сайта помечается git-тегом (`v0.5`, `v0.6`, …) и публикуется как релиз на GitHub. Список изменений — в [CHANGELOG.md](CHANGELOG.md).

### Развернуть конкретную версию / Deploy a specific version

```bash
git clone https://github.com/zalessky/SterX.git rolf-landing
cd rolf-landing
git checkout v0.6          # или любой другой тег, например v0.5
npm ci
npm run build
pm2 start npm --name "rolf-landing" -- start
```

### Переключиться на другую версию на уже работающем сервере / Switch version on a running server

```bash
cd rolf-landing
git fetch --tags
git checkout v0.5          # откат на нужную версию
npm ci
npm run build
pm2 restart rolf-landing
```

Без git можно скачать архив исходников со страницы релиза (Source code .zip / .tar.gz) и выполнить те же команды `npm ci && npm run build`.
