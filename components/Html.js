'use strict'

var React = require('react')

var Html = React.createClass({
  render: function() {

    return (
      <html>
      <head>
        <title>Isomorphic github</title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html: this.props.content}}></div>
      </body>
      <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
      <script src={this.props.src || '/build/js/client.js'} defer></script>
      </html>
    )
  }
})

module.exports = Html