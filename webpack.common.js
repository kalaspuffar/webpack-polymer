const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/webpack-polymer-app/webpack-polymer-app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: '.',
        toType: 'dir'
      }
    ], {})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};