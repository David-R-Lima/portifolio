# Base image with Node and pnpm installed
FROM node:20-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only dependency-related files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Now copy the rest of the app
COPY . .

# Build the app
RUN pnpm build

# Run the app
CMD ["pnpm", "start"]
