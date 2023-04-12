#!/bin/bash

# Ref: https://stackoverflow.com/questions/3404936/show-which-git-tag-you-are-on

git_version="$(git describe --tags --exact-match --match "v*.*.*"\
 || git describe --match "v*.*.*" --tags\
 || git describe --tags\
 || git rev-parse HEAD)"

export DOCKER_BUILDKIT=1

echo "Building recocloudapp/recocloud:demo-$git_version"
docker build\
 -t recocloudapp/recocloud:demo-"$git_version"\
 -f dockerfile\
 .

 echo "Jobs done!"
