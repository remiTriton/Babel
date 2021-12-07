FROM node:16-alpine as builder

WORKDIR /vue-ui

COPY . .

RUN npm ci && npm run build

FROM nginx:alpine as prod

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

COPY ./config/upstream.conf /etc/nginx/conf.d/upstream.conf

COPY --from=builder /vue-ui/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
