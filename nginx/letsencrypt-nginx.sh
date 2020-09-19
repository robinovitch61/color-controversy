!/usr/bin/env bash

# mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/www.$DOMAIN_NAME.conf

# service nginx start
#nginx -g "daemon off;"

certbot \
  --nginx \
  -d $DOMAIN_NAME \
  -d www.$DOMAIN_NAME \
  --email $LETSENCRYPT_EMAIL \
  --agree-tos \
  --redirect \
  --non-interactive \
  --no-eff-email \
  --test-cert

# nginx -g "daemon off;"
