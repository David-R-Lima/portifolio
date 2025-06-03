FROM node:22-slim

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy rest of the app
COPY . .

# Build the app
RUN pnpm build

# Set environment to production
ENV NODE_ENV=production

# Start the app
CMD ["pnpm", "start"]
