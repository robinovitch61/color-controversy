# color controversy

## Setup
First, I purchased the domain name colorcontroversy.com from [Namecheap](namecheap.com).

Then, I created a static IP address in AWS Lightsail in a specific region. I also created a DNS Zone and created A Records mapping `@.colorcontroversy.com` and `*.colorcontroversy.com` to the static IP. I also added the name servers provided by the Lightsail DNS zone to my Namecheap site's configuration. Nameservers are the part of DNS that map domain names to IP addresses, so adding Lightsail's nameservers tell Namecheap to map my purchased domain to the static IP assigned by Lightsail.

I then created a Lightsail instance with Ubuntu 18.04 in the same region as my static IP. I attached the static IP and added HTTPS on port 443. Then I ran the following setup:
```sh
# one time server setup
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker ubuntu
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

I then cloned this directory in to `/home/ubuntu/color` and created a `.env` file with the following values:
```sh
DEFAULT_EMAIL=<my-email>
HOSTNAME=test.colorcontroversy.com
POSTGRES_PASSWORD=<a-password>
```
Note that `docker-compose` will pick up the values in the `.env` file when running `docker-compose up -d`.

In order to get docker-compose to reload things on reboot, I created `docker-compose-color.service`. To enable it:
```sh
# one time service setup for reboot
cd /home/ubuntu/color
sudo cp docker-compose-color.service /etc/systemd/system
sudo systemctl enable docker-compose-color
sudo systemctl start docker-compose-color
```

## Sources
https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion
https://www.youtube.com/watch?v=z525kfneC6E
https://aws.amazon.com/blogs/compute/building-a-pocket-platform-as-a-service-with-amazon-lightsail/
