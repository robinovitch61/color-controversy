#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
DUMP_FILE_NAME="dump_$(date +"%Y-%m-%d_%H_%M_%S").sql"
DUMP_FILE_PATH="$DIR/$DUMP_FILE_NAME"
docker exec postgres pg_dumpall -c -U postgres > $DUMP_FILE_PATH
echo $(date +"%Y-%m-%d_%H_%M_%S"), $(docker exec postgres psql -U postgres -t -c "SELECT SUM(n_first) + SUM(n_second) FROM color") >> $DIR/judge_count.txt

aws s3 cp $DUMP_FILE_PATH s3://color-controversy-backup
NGINX_PROXY_ID="$( docker inspect --format="{{.Id}}" nginx-proxy )"
sudo aws s3 cp /var/lib/docker/containers/$NGINX_PROXY_ID/$NGINX_PROXY_ID-json.log s3://color-controversy-backup
PLAY_ID="$( docker inspect --format="{{.Id}}" play-backend )"
sudo aws s3 cp /var/lib/docker/containers/$PLAY_ID/$PLAY_ID-json.log s3://color-controversy-backup
aws s3 cp ./judge_count.txt s3://color-controversy-backup

