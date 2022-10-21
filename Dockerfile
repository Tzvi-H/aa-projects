FROM node:16.14-alpine

WORKDIR /app

COPY server.js .

EXPOSE 8000

CMD ["node", "server.js"]
