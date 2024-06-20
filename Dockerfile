FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

# Install Dependencies
RUN npm install

COPY . ./

# Build App
RUN npm run build

# Start App
CMD [ "npm", "run", "start" ]