## Installation Babel
```sh 
$ npm install babel-cli babel-preset-es2015 --save-dev
```
## Usage
 edit package.json
```js
  "scripts": {
    "build": "babel --presets es2015 src -d dist",
    "serve": "node dist/main.js"
  }
```

 and run command
```sh
$ npm run build
$ npm run serve
```