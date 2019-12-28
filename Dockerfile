FROM node:lts-alpine

WORKDIR /usr/buildinvest/api

COPY package*.json ./

RUN apk --no-cache --update --virtual build-dependencies add python make g++
RUN npm install
#RUN npm rebuild bcrypt --build-from-source \
RUN apk del build-dependencies

COPY . .

#RUN npm install apidoc -g
#RUN apidoc -i ./src/modules/**/controller.js -o ./public/api

EXPOSE 3000

CMD ["npm", "run", "prod"]

## PROD MOD COM NGINX
# FROM node:lts-alpine as build-stage
# WORKDIR /usr/buildinvest/api
# COPY package*.json ./
# RUN apk --no-cache --update --virtual build-dependencies add python make g++
# RUN npm install
# RUN apk del build-dependencies
# COPY . .
# RUN npm run build

# FROM nginx
# RUN mkdir /usr/buildinvest/api/server
# COPY --from=build-stage /usr/buildinvest/api/build /usr/buildinvest/api/server
# COPY nginx.conf /etc/nginx/nginx.conf