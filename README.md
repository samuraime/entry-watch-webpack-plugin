# entry-watch-webpack-plugin

watch entry change for MPA

[![npm version](https://badge.fury.io/js/entry-watch-webpack-plugin.svg)](https://badge.fury.io/js/entry-watch-webpack-plugin)
[![Build Status](https://travis-ci.org/samuraime/entry-watch-webpack-plugin.svg)](https://travis-ci.org/samuraime/entry-watch-webpack-plugin)
[![Dependencies Status](https://david-dm.org/samuraime/entry-watch-webpack-plugin.svg)](https://david-dm.org/samuraime/entry-watch-webpack-plugin)

## Install

```sh
npm install entry-watch-webpack-plugin --save-dev
```

## Usage

配合 [dynamic-entry](https://webpack.js.org/configuration/entry-context/#dynamic-entry), 

```js
const path = require('path');
const EntryWatchWebpackPlugin = require('entry-watch-webpack-plugin');

const entryRoot = path.resolve(__dirname, 'src');

module.exports = {
  async entry() {
    // 这里获取多入口配置, 需要自己实现
    const entries = await getEntries(entryRoot);
    return entries;
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new EntryWatchWebpackPlugin(entryRoot),
  ],
};
```

## License

[MIT](LICENSE)
