'use strict'

var React = require('react')
var Router = require('react-router')
var routes = require('./routes')

var Dispatcher = require('./lib/dispatcher')
var dispatcher = new Dispatcher()

dispatcher.rehydrate(window.App)

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler dispatcher={dispatcher} />, document.getElementById('app'))
})