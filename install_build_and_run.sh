#!/bin/bash
#stop on first error
set -e
#display error message on exit
trap 'echo -e "\e[1;91;40m╔═══════════╗\n║           ║\n║ E.R.R.O.R ║\n║           ║\n╚═══════════╝\e[0m"' EXIT

echo "Build Rust"
wasm-pack build

echo "Installing npm modules"
cd www/
npm install

echo "Building TypeScript"
cd src/ts
tsc

echo "Please run 'npm run start' under www folder and type http://localhost:8080/ in your web browser."

#reset trap
trap - EXIT
echo -e "\e[1;92;40m╔═══════╗\n║success║\n╚═══════╝\e[0m"
