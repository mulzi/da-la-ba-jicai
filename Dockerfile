FROM node:8.16.2

## forward request and error logs to docker log collector
#RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
#	ln -sf /dev/stderr /var/log/nginx/error.log

#COPY deploy/docker/nginx /etc/nginx
#COPY deploy/site/ /usr/share/nginx/html/

WORKDIR /app

COPY . /app

ARG APP_ENV
ARG TZ

RUN npm install
CMD npm run build && npm run start
