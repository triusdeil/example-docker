FROM node:20.11.0

WORKDIR /rest-api-docker
COPY package.json .
RUN npm install

COPY . .
CMD npm run dev