const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,

  // Used to be: 'cheap-module-eval-source-map' but it seems that didn't provide
  // any source mapping. Maybe it was just chromes fault. Who knows, for now,
  // restored to cheap-module-source-map devtool
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'cheap-module-source-map',

  entry: {
    app: [
      './src/index.js'
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
