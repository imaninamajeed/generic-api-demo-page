#!/bin/bash

# Ref: https://stackoverflow.com/questions/3404936/show-which-git-tag-you-are-on

docker_image_reponame=recocloudapp/recocloud

git_version="$(git describe --tags --exact-match --match "v*.*.*"\
 || git describe --match "v*.*.*" --tags\
 || git describe --tags\
 || git rev-parse HEAD)"

git_version="demo-${git_version}"

current_tagname="${docker_image_reponame}:${git_version}"
latest_tagname="${docker_image_reponame}:demo-latest"

export DOCKER_BUILDKIT=1

echo "Building ${current_tagname}"
docker build\
 -t "$current_tagname"\
 -f dockerfile\
 .

docker tag "$current_tagname" "$latest_tagname"
echo "Jobs done!"