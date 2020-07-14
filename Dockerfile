FROM node:lts-alpine

WORKDIR /usr/buildinvest/api

COPY package*.json ./

RUN apk --no-cache --update --virtual build-dependencies add python make g++
RUN npm install

# Sequelize
RUN npm install -g sequelize-cli
RUN sequelize-cli db:migrate
RUN sequelize-cli db:seed:all

#RUN npm rebuild bcrypt --build-from-source \
RUN apk del build-dependencies

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]