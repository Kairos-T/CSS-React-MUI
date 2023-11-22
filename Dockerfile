# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Clean and reinstall dependencies
RUN rm -rf node_modules
COPY package*.json ./
RUN npm install --force

# Copy application code
COPY . ./

# Install dependencies and build
RUN npm ci --legacy-peer-deps
RUN npm run build

# Production stage
FROM nginx:stable-alpine AS production
WORKDIR /usr/share/nginx/html

# Copy the built files from the build stage
COPY --from=build /app/build .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
