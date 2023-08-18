## BUILD STAGE ##
FROM node:18-alpine As build
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .
RUN npx tsc -p ./tsconfig.json

## DEV STAGE ##
FROM node:18-alpine As Development
WORKDIR /usr/src/app

COPY package.json .
RUN npm install 

COPY --from=build /usr/src/app/build ./build

EXPOSE 3000

CMD ["node", "./build/index.js"]
