FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]