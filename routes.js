'use strict'

var React = require('react')
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route

var App = require('./components/App')
var About = require('./components/About')
var Home = require('./components/Home')

var routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name='about' path='/about' handler={About} />
  </Route>
)

module.exports = routes