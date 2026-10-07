# syntax=docker/dockerfile:1
# Сборка лендинга в статические файлы и раздача через непривилегированный nginx.
# Итоговый образ: только nginx + HTML/JS/CSS, без Node.js и исходников.

# ---------- 1. Сборка (всегда на «родной» платформе сборщика) ----------
FROM --platform=$BUILDPLATFORM node:20-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
COPY package.json package-lock.json ./
# npm иногда завершается «успешно», не скачав пакеты, — проверяем явно
RUN npm ci --no-audit --no-fund && test -x node_modules/.bin/next
COPY . .
RUN npm run build
# результат: /app/out (next.config.mjs содержит output: 'export')

# ---------- 2. Раздача (образ под платформу NAS: amd64 или arm64) ----------
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY deploy/nginx-site.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
