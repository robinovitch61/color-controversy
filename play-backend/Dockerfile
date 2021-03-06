FROM anapsix/alpine-java:jdk8
MAINTAINER Tianhao Li <ysihaoy@gmail.com>

ENV SBT_VERSION 1.3.13
ENV CHECKSUM edebbafa8d0541ad307600cd3f12b1a41bd688b8035aca24489d4a13638dfe05

# Install sbt
RUN apk add --update bash curl openssl ca-certificates && \
  curl -LJ -o /tmp/sbt.zip \
    https://github.com/sbt/sbt/releases/download/v${SBT_VERSION}/sbt-${SBT_VERSION}.zip && \
  openssl dgst -sha256 /tmp/sbt.zip \
    | grep ${CHECKSUM} \
    || (echo 'shasum mismatch' && false) && \
  mkdir -p /opt/sbt && \
  unzip /tmp/sbt.zip -d /opt/sbt && \
  rm /tmp/sbt.zip && \
  chmod +x /opt/sbt/sbt/bin/sbt && \
  ln -s /opt/sbt/sbt/bin/sbt /usr/bin/sbt && \
  rm -rf /tmp/* /var/cache/apk/*

# Prebuild with sbt
COPY . /tmp/build/

# caching dependencies
COPY ["build.sbt", "/tmp/build/"]
COPY ["project/plugins.sbt", "project/build.properties", "/tmp/build/project/"]
RUN cd /tmp/build && \
 sbt compile && \
 rm -rf /tmp/build

# copy code
COPY . /root/app/
WORKDIR /root/app
RUN sbt compile

EXPOSE 9000
CMD ["sbt", "~run"]
