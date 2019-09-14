#FROM node:alpine
FROM node:12

WORKDIR /usr/buildinvest/api

COPY package*.json ./

#RUN apk --no-cache --update --virtual build-dependencies add python make g++
RUN npm install
#RUN npm rebuild bcrypt --build-from-source \
#RUN apk del build-dependencies

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
