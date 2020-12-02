FROM node:latest

RUN apt-get update && apt-get install -y software-properties-common 

RUN apt-get -y upgrade

RUN yarn global add typescript nodemon

WORKDIR /app

EXPOSE 3000