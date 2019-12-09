FROM node:latest as builder

WORKDIR /src

COPY . .

RUN yarn config set registry 'https://registry.npm.taobao.org' && yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN DLB_API='http://lightning-gateway:13020' yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:alpine

WORKDIR /src

COPY --from=builder /src  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
