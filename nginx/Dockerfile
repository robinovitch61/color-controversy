FROM nginx:1.19.1

RUN apt-get update \
      && apt-get install -y \
      python-certbot-nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

# TODO: default.conf change server name automatically
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN ["mv", "/etc/nginx/conf.d/default.conf", "/etc/nginx/conf.d/www.$DOMAIN_NAME.conf"]

COPY ./letsencrypt-nginx.sh ./letsencrypt-nginx.sh
RUN ["chmod", "+x", "./letsencrypt-nginx.sh"]

RUN ["certbot", "--nginx", "-d", "$DOMAIN_NAME", "-d", "www.$DOMAIN_NAME", "--email", "$LETSENCRYPT_EMAIL", "--agree-tos", "--redirect", "--non-interactive", "--test-cert"]

# CMD ["./letsencrypt-nginx.sh"]
