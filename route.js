'use strict'

var React = require('react')
var Router = require('react-router')
var Dispatcher = require('./lib/dispatcher')

var routes = require('./routes')
var Html = require('./components/Html')
var loadRepos = require('./actions/loadRepos')

module.exports = function(req, res, next) {
  var jsSrc = process.env.NODE_ENV != 'production' ? 'http://localhost:4001/build/client.js' : null

  Router.run(routes, req.path, function(Handler) {
    var dispatcher = new Dispatcher()

    loadRepos(dispatcher, {}, function(err) {

      var content = React.renderToString(React.createElement(Handler, {dispatcher: dispatcher}), null)

      res.expose(dispatcher.dehydrate(), 'App')

      var html = React.renderToStaticMarkup(<Html content={content} src={jsSrc} state={res.locals.state} />)
      res.end('<!DOCTYPE html>' + html)
    })


  })
}