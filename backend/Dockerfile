# Dockerfile for Railway - Backend Service
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy all backend files
COPY . .

# Expose port (Railway will set PORT automatically)
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]

