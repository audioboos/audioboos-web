#!/usr/bin/env bash

BUILD=1

if [ $BUILD -eq 1 ]; then
    docker build \
        --build-arg RUN_MODE=staging \
        -t fergalmoran/audioboos-web \
        -f docker/Dockerfile \
        --load .
fi

docker run \
    -p 8081:80 \
    fergalmoran/audioboos-web
