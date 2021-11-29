#  Dockerfile for Node Express Backend

FROM node:16.5.0-alpine3.14

# Create App Directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn install

# Copy app source code
COPY . .

RUN yarn build

# Exports
EXPOSE 4000

CMD ["yarn","start"]