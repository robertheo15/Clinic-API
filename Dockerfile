FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript code
RUN npm run build

EXPOSE 4000

# Use node directly instead of npm for better signal handling
CMD ["node", "dist/index.js"]
