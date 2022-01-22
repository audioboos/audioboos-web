#!/usr/bin/env bash

source ~/.prv/github_token && \
    echo $GITHUB_TOKEN | docker login ghcr.io -u fergalmoran --password-stdin && \
    docker build -t ghcr.io/audioboos/audioboos-web -f docker/Dockerfile . && \
    docker push ghcr.io/audioboos/audioboos-web
