FROM node:12 as builder

WORKDIR /js/cscoupler-client

ADD . /js/cscoupler-client

RUN npm install

RUN npm install http-server -g

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist/" ]