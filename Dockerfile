FROM node:12

WORKDIR /js/cscoupler-client

ADD . /js/cscoupler-client

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve"]