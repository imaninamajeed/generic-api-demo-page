#!/bin/bash

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

# Stop the existin server
$SCRIPT_DIR/stop-server.sh

# Start the development server
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# Perform server cleanup
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
