#!/bin/bash

cd "$(dirname "$0")"

SERVER_BIN="./node_modules/http-server/bin/http-server"

if [ ! -f "$SERVER_BIN" ]; then
   npm install http-server
fi

"$SERVER_BIN" -c-1 -p 8081
