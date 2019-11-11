FROM node:12 as builder

WORKDIR /cscoupler-client

ADD . /cscoupler-client

RUN npm install

RUN npm install http-server -g

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist/" ]