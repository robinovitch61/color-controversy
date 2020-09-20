#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
docker exec postgres pg_dumpall -c -U postgres > $DIR/dump_$(date +"%Y-%m-%d_%H_%M_%S").sql
