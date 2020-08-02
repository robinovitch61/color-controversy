FROM anapsix/alpine-java:jdk8
MAINTAINER Tianhao Li <ysihaoy@gmail.com>

ENV SBT_VERSION 1.3.4
ENV CHECKSUM 04d49d6e535b3586e40910ccd7396034ca7a7bab7d31bfd265fddca7cccc95eb

# Install sbt
RUN apk add --update bash curl openssl ca-certificates && \
  curl -L -o /tmp/sbt.zip \
    https://piccolo.link/sbt-${SBT_VERSION}.zip && \
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

# sbt sometimes failed because of network. retry 3 times.
RUN cd /tmp/build && \
  (sbt compile || sbt compile || sbt compile) && \
  (sbt test:compile || sbt test:compile || sbt test:compile) && \
  rm -rf /tmp/build

CMD ["sbt"]
