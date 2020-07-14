FROM node:lts-alpine

WORKDIR /usr/buildinvest/api

COPY package*.json ./

RUN apk --no-cache --update --virtual build-dependencies add python make g++
RUN npm install

#RUN npm rebuild bcrypt --build-from-source \
RUN apk del build-dependencies

COPY . .

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "./docker-entrypoint.sh"]

# CMD ["npm", "run", "dev"]