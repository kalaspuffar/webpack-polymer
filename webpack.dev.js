const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'fake-service-worker.js',
        to: path.resolve(__dirname, 'dist') + '/service-worker.js',
        toType: 'file'
      }
    ], {})
  ]
});