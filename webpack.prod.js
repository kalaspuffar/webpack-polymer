const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PUBLIC_PATH = 'https://www.uhash.com/webpack-polymer/';  // webpack needs the trailing slash for output.publicPath

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'manifest.json',
        to: '.',
        toType: 'dir'
      }
    ], {}),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'webpack-polymer',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    )
  ]
});