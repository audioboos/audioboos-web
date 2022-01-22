#!/usr/bin/env bash

docker build \
    -t fergalmoran/audioboos-web \
    -f docker/Dockerfile \
    --load .

docker run \
    -p 8081:80 \
    fergalmoran/audioboos-web
