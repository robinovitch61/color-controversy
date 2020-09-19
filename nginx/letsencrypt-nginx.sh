#!/usr/bin/env bash

apt-get update \
    && apt-get install -y \
    python-certbot-nginx

mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/www.$DOMAIN_NAME.conf

#service nginx start
#nginx -g "daemon off;"

certbot --nginx -d $DOMAIN_NAME -d www.$DOMAIN_NAME --email $LETSENCRYPT_EMAIL --agree-tos --redirect --test-cert --non-interactive

#nginx -g "daemon off;"
