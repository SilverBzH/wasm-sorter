<div align="center">

  <h1><code>wasm-sorter</code></h1>
  <p>
  Sort algorihm implement in rust, used in Js, print with html/css
  </p>
  <p>
    <sub>Built with 🦀🕸</sub>
  </p>
</div>

## 📚 Read these documentation if you wish to learn how rust + webassembly work together! 📚

[Rust](https://www.rust-lang.org/)
[Rust + Webassembly](https://rustwasm.github.io/docs/book/introduction.html)

## 🚴 Usage

### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
cd www/
npm install
npm run start
firefox http://localhost:8080/
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### 🎁 Publish to NPM with `wasm-pack publish`

```
wasm-pack publish
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
