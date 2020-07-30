# color controversy

## Setup
First, I purchased the domain name colorcontroversy.com from Namecheap.com.

Then, I created a static IP address in AWS Lightsail in a specific region. I also created a DNS Zone and created A Records mapping `@.colorcontroversy.com` and `*.colorcontroversy.com` to the static IP.

I then created a Lightsail instance with Ubuntu 18.04 and ran the following setup:
```sh
# one time server setup
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker ubuntu
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Many thanks to Robert Zhu's tutorial [here](https://aws.amazon.com/blogs/compute/building-a-pocket-platform-as-a-service-with-amazon-lightsail/).
