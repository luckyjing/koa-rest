FROM node:6.3.0

MAINTAINER LuckyJing "https://github.com/luckyjing"

RUN mkdir -p /var/app

WORKDIR /var/app

COPY . /var/app/

RUN npm install

RUN npm run build


ENV NODE_ENV production

EXPOSE 5000

WORKDIR /var/app

CMD ["node","start.js"]
