# dalaba-web-ssr-front

> dalaba web ssr front

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# docker

docker build  -f Dockerfile -t registry.cn-hangzhou.aliyuncs.com/yywh/dalaba-web-ssr-front:1.0 .

docker run -d --name web-test -p 9111:3000  -e TZ=Asia/Shanghai registry.cn-hangzhou.aliyuncs.com/yywh/dalaba-web-ssr-front:1.0
