FROM node:12.18.3-slim as cms-build

WORKDIR /cms
COPY ./cms /cms

RUN npm i
RUN npm run build
