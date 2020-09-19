# FROM nginx:1.19.1
# 
# RUN apt-get update \
#     && apt-get install -y \
#     python-certbot-nginx
# 
# COPY ./nginx.conf /etc/nginx/nginx.conf
# 
# COPY ./default.conf /etc/nginx/conf.d/www.wip.colorcontroversy.com.conf
# 
# RUN rm /etc/nginx/conf.d/default.conf
# 
# RUN service nginx start
# 
# CMD ["certbot", "--nginx", "-d", "wip.colorcontroversy.com", "-d", "www.wip.colorcontroversy.com", "--email", "leorobinovitch@gmail.com", "--agree-tos"]
# 

FROM nginx:1.19.1
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./letsencrypt-nginx.sh ./letsencrypt-nginx.sh
RUN ["chmod", "+x", "./letsencrypt-nginx.sh"]
CMD ["./letsencrypt-nginx.sh"]
