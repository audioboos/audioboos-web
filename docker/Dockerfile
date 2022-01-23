FROM node:17-buster as builder

ARG RUN_MODE=production

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .env.${RUN_MODE} .env

RUN yarn install
COPY . .

ENV NODE_ENV=production
RUN yarn build --mode ${RUN_MODE}

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENV VITE_URL=https://dev.audioboos.info:5001
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
CMD [ "/bin/sh", "-c", "nginx -g 'daemon off;'" ]