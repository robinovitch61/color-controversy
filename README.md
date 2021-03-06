# color controversy

[colorcontroversy.com](https://www.colorcontroversy.com)

This is an app I made to determine the world's most controversial colors.

Here is a bit about the technical architecture.

## Backend

Backend is a REST api built with Scala Play, found in `play-backend`.

Play connects with a Postgres db.

## Frontend

Frontend is a React + TypeScript app found in `react-frontend`.

In order to unify the types and api endpoints across the stack, a swagger (i.e. OpenAPI 2) specification is autogenerated on the backend using [a Scala play plugin called iheartradio/play-swagger](https://github.com/iheartradio/play-swagger). The frontend then generates TypeScript api stubs and types based off this swagger specification using [swagger-typescript-codegen](https://github.com/mtennoe/swagger-typescript-codegen).

## Development

```sh
cd <root-of-this-repo>
docker-compose -f docker-compose-dev.yml up -d
```

The main difference between the `docker-compose-dev.yml` and `docker-compose-prod.yml` is that dev uses a simpler, no ssl nginx setup, whereas prod uses [docker-letsencrypt-nginx-proxy-companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion/blob/master/docs/Advanced-usage.md) for ssl config and autorenewing certificates.

## Hosting Setup

I purchased the domain name colorcontroversy.com from [Namecheap](namecheap.com).

I then created a static IP address in AWS Lightsail in a specific region. I also created a DNS Zone and created A Records mapping `@.colorcontroversy.com` and `*.colorcontroversy.com` to the static IP.

I then added the 4 name servers provided by the Lightsail DNS zone to my Namecheap site's configuration (nameservers -> custom dns). Nameservers are the part of DNS that map domain names to IP addresses, so adding Lightsail's nameservers tell Namecheap to map my purchased domain to the static IP assigned by Lightsail. Locallying `ping`ing colorcontroversy.com returned the static IP after this configuration change propogated (took only a couple of minutes).

I then created a Lightsail instance with Ubuntu 18.04 in the same region as my static IP. I attached the static IP and added HTTPS on port 443.

Then I ssh'd in to the instance and ran the following setup:

```sh
# install docker and docker-compose and allow sudo-less usage
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker ubuntu
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

```sh
# configure git for instance
git config --global user.name "Your Name"
git config --global user.email "youremail@gmail.com"
git config --global credential.helper store
git config --global core.editor "vim"
```

```sh
# install aws cli
sudo apt install awscli

# configured aws account for this instance
# https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
aws configure
```

I then cloned this github repo on the lightsail instance and created a `.env` file in the root of the cloned repo with the following values:

```sh
DEFAULT_EMAIL=<my-email>
DOMAIN=colorcontroversy.com,www.colorcontroversy.com
POSTGRES_PASSWORD=<a-password>
```

To run the frontend, backend, db, and nginx containers:
```sh
cd <root-of-this-repo>
docker-compose -f docker-compose-prod.yml up -d
```

Note that `docker-compose` will pick up the values in the `.env` file when running commands from the same directory as the `.env` file (root of cloned repo).

Additionally, to actually get a real cert from letsencrypt, make sure the non-staging `ACME_CA_URI` is uncommented in `docker-compose-prod.yml`. The rate limits are real here so only do this if you're sure it all works - retries are limited.

## Postgres Backups

### Scheduled backups:

Create cron job for `backups/backup.sh`:
```sh
crontab -e
```
Add following to bottom of file:
```sh
1 * * * * <absolute-path-to-cloned-repo>/backups/backup.sh
```
This will create an hourly backup in the `backups/` directory. You can test it's working by temporarily changing `1 * * * *` to `* * * * *` and waiting one minute, then checking the `backups/` directory contents.

I also copy these backups and some container logs to an S3 bucket as part of the `backup.sh` script.

### Restore from backup:
```sh
# must drop data before restoring it
docker exec postgres psql -U postgres -c "drop table color"
docker exec postgres psql -U postgres -f /home/backups/dump_<desired-date>.sql
```

## Troubleshooting

### Rate limits on Let's Encrypt Duplicate Certificates.
When using the prod compose file, it's easy to run up against letsencrypt rate limiting if you request too many valid certs for a domain or from a specific IP. Using `https://acme-staging-v02.api.letsencrypt.org/directory` as `ACME_CA_URI` allows higher rate limits and is good for development of the prod setup.

Rate limit docs [here](https://letsencrypt.org/docs/rate-limits/).

See [here](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion/blob/9806ba25871d26a3eadeecf3771afd3378f0b01a/docs/Container-configuration.md) for notes on `ACME_CA_URI`.

### Restart single docker-compose service
  E.g.:

```sh
docker-compose stop db
docker-compose build db # unnecessary if no Dockerfile
docker-compose create db
docker-compose start db
```

alternatively:

```sh
docker stop db
docker rm db
docker-compose up -d --no-deps --build db
```

### Deal with ssh error:

```sh
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
...
```

Remove the cached key for the IP:
```sh
ssh-keygen -R <ip-here>
```

### See app locally from remote instance
  e.g. app running in container on 9000 with port exposed to host machine

```sh
ssh -L 9000:localhost:9000 -i <path-to-key> <my-user>@<my-ip>`
```

Now you can visit localhost:9000 on your local machine and see your app running on the remote instance. Not really necessary.

### Rebuild swagger on backend in dev:
```sh
docker exec play-backend sbt swagger
```
Can then visit `localhost/swagger` in browser to see updated spec.

## Many Thanks To:
- https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion
- https://www.youtube.com/watch?v=z525kfneC6E
- https://blog.xkcd.com/2010/05/03/color-survey-results/
- https://aws.amazon.com/blogs/compute/building-a-pocket-platform-as-a-service-with-amazon-lightsail/
- https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion/blob/master/docs/Advanced-usage.md
- https://hub.docker.com/r/ysihaoy/scala-play/
- https://mherman.org/blog/dockerizing-a-react-app/
