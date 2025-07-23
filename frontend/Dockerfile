# Stage 1: Build app
FROM node:18-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy toàn bộ code vào container
COPY . .

# Cài đặt dependencies và build
RUN npm install
RUN npm run build

# Stage 2: Chạy app đã build
FROM node:18-alpine

WORKDIR /app

# Copy toàn bộ từ stage build
COPY --from=builder /app .

# Expose cổng mặc định
EXPOSE 3000

# Chạy app
CMD ["npm", "start"]
