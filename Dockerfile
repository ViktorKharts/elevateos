FROM node:23

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build
RUN rm -rf ./src

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
