# color controversy

## Setup
First, I purchased the domain name colorcontroversy.com from [Namecheap](namecheap.com).

Then, I created a static IP address in AWS Lightsail in a specific region. I also created a DNS Zone and created A Records mapping `@.colorcontroversy.com` and `*.colorcontroversy.com` to the static IP. I also added the name servers provided by the Lightsail DNS zone to my Namecheap site's configuration. Nameservers are the part of DNS that map domain names to IP addresses, so adding Lightsail's nameservers tell Namecheap to map my purchased domain to the static IP assigned by Lightsail. `ping`ing the domain name returned the static IP after this configuration change was propograted (a couple of minutes).

I then created a Lightsail instance with Ubuntu 18.04 in the same region as my static IP. I attached the static IP and added HTTPS on port 443. Then I ran the following one time setup:
```sh
# install docker and docker-compose and allow sudo-less usage
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker ubuntu
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# installed haveged for entropy
sudo apt-get install haveged
sudo update-rc.d haveged defaults

# added the following entry to /etc/hosts for docker-compose
# 127.0.0.1 localunixsocket
```

I then cloned this directory in to `/home/ubuntu/color` and created a `.env` file with the following values:
```sh
DEFAULT_EMAIL=<my-email>
HOSTNAME=test.colorcontroversy.com
POSTGRES_PASSWORD=<a-password>
ACME_CA_URI=https://acme-v02.api.letsencrypt.org/directory
```
Note that `docker-compose` will pick up the values in the `.env` file when running `docker-compose up -d`. See [here](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion/blob/9806ba25871d26a3eadeecf3771afd3378f0b01a/docs/Container-configuration.md) for notes on ACME_CA_URI (example shows prod URI).

In order to get docker-compose to reload things on reboot, I created `docker-compose-color.service`. To enable it:
```sh
# one time service setup for reboot
cd /home/ubuntu/color
sudo cp docker-compose-color.service /etc/systemd/system
sudo systemctl enable docker-compose-color
sudo systemctl start docker-compose-color
```

## Troubleshooting
* Rate limits on Let's Encrypt Duplicate Certificates. As per docs [here](https://letsencrypt.org/docs/rate-limits/):
> Renewals are treated specially: they don’t count against your Certificates per Registered Domain limit, but they are subject to a Duplicate Certificate limit of 5 per week. Note: renewals used to count against your Certificate per Registered Domain limit until March 2019, but they don’t anymore. Exceeding the Duplicate Certificate limit is reported with the error message too many certificates already issued for exact set of domains.
> A certificate is considered a renewal (or a duplicate) of an earlier certificate if it contains the exact same set of hostnames, ignoring capitalization and ordering of hostnames. For instance, if you requested a certificate for the names [www.example.com, example.com], you could request four more certificates for [www.example.com, example.com] during the week. If you changed the set of hostnames by adding [blog.example.com], you would be able to request additional certificates.
As such, if you encounter "too many certificates already issued for exact set of domains" in your nginx letsencrypt proxy companion logs, change the HOSTNAME in the .env file. To avoid this happening, don't restart containers repeatedly if you can avoid it.

>A certificate is considered a renewal (or a duplicate) of an earlier certificate if it contains the exact same set of hostnames, ignoring capitalization and ordering of hostnames. For instance, if you requested a certificate for the names [www.example.com, example.com], you could request four more certificates for [www.example.com, example.com] during the week. If you changed the set of hostnames by adding [blog.example.com], you would be able to request additional certificates.
* Restart single docker-compose service
E.g.:
```sh
docker-compose stop db
docker-compose build db # unnecessary if no Dockerfile
docker-compose create db 
docker-compose start db 
```
* Deal with following ssh error:
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
...
```
Remove the cached key for the static IP:
`ssh-keygen -R <static-ip-here>`

## Sources
* https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion
* https://www.youtube.com/watch?v=z525kfneC6E
* https://aws.amazon.com/blogs/compute/building-a-pocket-platform-as-a-service-with-amazon-lightsail/
* https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion
