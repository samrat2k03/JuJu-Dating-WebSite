FROM node:latest

WORKDIR /var/www/app
ENV CHOKIDAR_USEPOLLING=true

RUN yarn global add nodemon

CMD ["sh", "-c", "cp .env.example .env && yarn install && yarn start"]
