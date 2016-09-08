## Installtion Webpack

```sh
$ npm install webpack --save-dev
```

## Usage

```sh
$ webpack ./script.js bundle.js
```

binding with other extension 

```sh
$ npm install style-loader css-loader --save-dev
$ webpack ./script.js bundle.js --module-bind 'css=style!css'
```

create a config file webpack.config.js

```js
module.exports = {
    entry: "./script.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```
run webpack to compiler

```sh
$ webpack
```

or run with display error details

```sh
$ webpack --display-error-details
```