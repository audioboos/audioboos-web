FROM node:14.15.4-buster as builder

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .env.production .env
# RUN yarn install --frozen-lockfile
RUN yarn install
COPY . .

ENV NODE_ENV=production
RUN yarn build --mode production

FROM nginx:1.21.3-alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY --from=builder /app/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD nginx -g 'daemon off;'
