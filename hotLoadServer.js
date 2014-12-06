var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

var port = process.env.HOT_LOAD_PORT || 4001

new WebpackDevServer(webpack(config), {
  contentBase: 'http://localhost:4000',
  publicPath: config.output.publicPath,
  hot: true
}).listen(port, 'localhost', function(err, result) {
  if (err) console.log(err)

  console.log('Listening at localhost:' + port)
})