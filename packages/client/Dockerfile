# Dockerfile for React client

# Build react client
FROM node:16.5.0-alpine3.14

# Working directory be app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

###  Installing dependencies

# RUN npm install -g yarn
RUN yarn install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["yarn","start"]