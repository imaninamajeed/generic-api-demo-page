# README

## Deploy with docker

1. Build the image
2. Up the compose

```bash
## Build docker image
./.dev/build-docker.sh

## Up the docker compose
./.dev/run-server.sh
```

3. (Optional) To stop the server

```sh
./.dev/stop-server.sh
```

## Development

Why we need the following to test?
In order to resolve the CORS problem. Ofcuz there are several way to resolve it but the following method use the dirtiest way to resolve.

1. Mount the current working environment to the container with the following code:

```sh
./.dev/dev-server.sh
```

2. Open the webpage at app deploy point. For example `http://localhost:18183/`