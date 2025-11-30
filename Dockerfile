# Dockerfile for Railway - This should NOT be used
# Railway should use backend/Dockerfile instead
# Set Root Directory to "backend" in Railway dashboard!

FROM node:18

WORKDIR /app

# This Dockerfile is a fallback - Railway should use backend/ directory
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend/ ./

EXPOSE 3000
CMD ["node", "server.js"]

