const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const EntryWatchWebpackPlugin = require('..');
const getEntries = require('./getEntries');

const entryRoot = path.resolve(__dirname, 'src');

module.exports = {
  async entry() {
    const files = await getEntries(entryRoot);
    return files;
  },
  context: entryRoot,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new EntryWatchWebpackPlugin(entryRoot),
  ],
};
