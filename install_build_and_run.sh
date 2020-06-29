#!/bin/bash

echo "Build Rust"
wasm-pack build

echo "Installing npm modules"
cd www/
npm install

echo "Building TypeScript"
cd src/ts
tsc

echo "Please run 'npm run start' under www folder and type http://localhost:8080/ in your web browser."