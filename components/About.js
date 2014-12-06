'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var About = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='home'>Home</Link>
        <div>About Page</div>
      </div>
    )
  }
})

module.exports = About