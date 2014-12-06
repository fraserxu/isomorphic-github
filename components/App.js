'use strict'

var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var App = React.createClass({

  render: function() {
    return (
      <div>
        <RouteHandler dispatcher={this.props.dispatcher} />
      </div>
    )
  }
})

module.exports = App