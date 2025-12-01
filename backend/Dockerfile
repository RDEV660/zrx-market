FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (use npm install instead of npm ci since we don't have lock file)
RUN npm install --omit=dev

# Copy backend files
COPY . .

# Expose port
EXPOSE 8080

# Start server
CMD ["npm", "start"]

