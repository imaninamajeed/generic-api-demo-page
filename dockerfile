FROM node:16.15.0-alpine as build

WORKDIR /root

COPY package-lock.json package.json /root/

RUN npm ci

COPY public /root/public/
COPY src /root/src/

RUN npm run build

FROM node:16.15.0-alpine as runtime

WORKDIR /root

COPY --from=build /root/build/ /root/build/

RUN npm i -g serve
