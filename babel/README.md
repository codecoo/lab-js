## Installation Babel
```sh 
$ npm install babel-cli babel-preset-es2015 --save-dev
```
## Usage
 edit package.json
```js
  "scripts": {
    "build": "babel src -d lib"
  },
  "scripts": {
    "build": "babel --presets es2015 src -d lib"
  }
```

 and run command
```sh
$ npm run build
```