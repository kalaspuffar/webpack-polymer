const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/webpack-polymer-app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: 'images/*',
        to: '.',
        toType: 'dir'
      },
      {
        from: 'index.html',
        to: '.',
        toType: 'dir'
      },
      {
        from: 'images/favicon.ico',
        to: 'favicon.ico',
      },
      {
        from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.js'),
        to: 'node_modules/@webcomponents/webcomponentsjs/[name].[ext]'
      }
    ], {}),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};