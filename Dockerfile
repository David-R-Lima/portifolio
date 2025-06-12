FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV="production"

COPY . /app
WORKDIR /app

RUN npm install -g pnpm && pnpm install

RUN pnpm build

CMD [ "pnpm", "start" ]