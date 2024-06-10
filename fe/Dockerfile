FROM node:lts-slim

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y \
    && apt-get update \
    && npm install \
    && npm install -g pm2

CMD ["sh", "-c", "npm run dev"]