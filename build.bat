ECHO Windows installation script

ECHO Building Rust - Rust, wasm-pack and msvc needed.
wasm-pack build

ECHO Installing npm modules
cd www/
npm install

ECHO Building Typescript
cd src/ts/
tsc

ECHO SUCCESS.
ECHO Please run 'npm run start' under www folder and type http://localhost:8080/ in your web browser.
