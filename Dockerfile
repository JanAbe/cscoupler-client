FROM node:12 as builder
WORKDIR /js/cscoupler-client
ADD . /js/cscoupler-client
RUN npm install
RUN npm run build

FROM nginx
RUN mkdir /cscoupler-client
COPY --from=builder /js/cscoupler-client/dist /cscoupler-client
COPY nginx.conf /etc/nginx/nginx.conf