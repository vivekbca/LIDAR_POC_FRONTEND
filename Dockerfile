# STAGE 1: Build ###
FROM node:16.13-alpine as base
LABEL multi.maintainer="dhilip@echoltech.com" multi.version="latest" 
WORKDIR /app
RUN npm install --location=global @angular/cli@13.1.3
COPY package.json ./
RUN npm install
COPY . /app
RUN npm run build

## STAGE 2: Run ###
FROM nginx:latest
# COPY dist/anpr /usr/share/nginx/html
COPY --from=base /app/dist/anpr /usr/share/nginx/html
EXPOSE 80
