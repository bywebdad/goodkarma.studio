FROM node:20-alpine AS base

# Установка pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Установка зависимостей
FROM base AS deps
WORKDIR /app

# Копирование файлов пакетов
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js собирает полностью анонимные данные телеметрии об общем использовании.
# Подробнее: https://nextjs.org/telemetry
# Раскомментируйте следующую строку, если хотите отключить телеметрию во время сборки.
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# Рабочий образ, копирование всех файлов и запуск next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Установка правильных разрешений для кэша предварительного рендеринга
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Автоматическое использование трассировки вывода для уменьшения размера образа
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
