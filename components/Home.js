'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var RepoStore = require('../stores/RepoStore')

var Home = React.createClass({
  getInitialState: function() {
    return {
      repos: this.props.dispatcher.getStore(RepoStore).getAllRepos()
    }
  },

  onChange: function() {
    this.setState(this.getInitialState())
  },

  componentDidMount: function() {
    this.props.dispatcher.getStore(RepoStore).addChangeListener(this.onChange)
  },

  componentWillUnmount: function() {
    this.props.dispatcher.getStore(RepoStore).removeChangeListener(this.onChange)
  },

  render: function() {
    var repoList = this.state.repos.map(function(repo) {
      return <li key={repo.id}>{repo.name}</li>
    })

    return (
      <div>
        <Link to='about'>About</Link>
        <div>Repo List</div>
        <div>
          <ul className='lists'>{repoList}</ul>
        </div>
      </div>
    )
  }
})

module.exports = Home