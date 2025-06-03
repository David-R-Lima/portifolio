# Install dependencies only when needed
FROM node:22-slim AS deps

WORKDIR /app

# Prevents re-installing node_modules unless package.json or lockfile changes
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Use pnpm if available
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:22-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# Production image
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["pnpm", "start"]
