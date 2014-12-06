'use strict'
var webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:4001',
    'webpack/hot/only-dev-server',
    "./client.js"
  ],
  output: {
    path: __dirname+'/build/',
    filename: "client.js",
    publicPath: 'http://localhsot:4001/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx'] }
    ]
  }
}