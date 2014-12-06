'use strict'

require('node-jsx').install({extension: '.js'})

var debug = require('debug')('isomorphic-github')
var express = require('express')
var path = require('path')
var logger = require('morgan')
var expstate = require('express-state')
var React = require('react')
var server = express()
var route = require('./route')


server.use(logger(server.get('env') === 'production' ? 'combined' : 'dev'))
expstate.extend(server)
server.use(express.static('./'))

server.use(route)

server.use(function (err, req, res, next) {
  res.status(500)
  // TODO: simple page for errors not in dev environment
  res.send('<pre>' + err.stack + '</pre>')
})

server.set('port', process.env.PORT || 4000)
server.listen(server.get('port'), function() {
  debug('Express ' + server.get('env') + ' server listening on port ' + this.address().port)
})