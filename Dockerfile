FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install --only-prod
COPY index.js .
CMD ["node", "index.js"]