var obejctAssign = require('object-assign')
var EventEmitter = require('events').EventEmitter

function RepoStore() {
  this.repos = []
}
RepoStore.storeName = 'RepoStore'
RepoStore.handlers = {
  'RECEIVE_REPOS': 'onReceiveRepos'
}

obejctAssign(RepoStore.prototype, EventEmitter.prototype, {
  onReceiveRepos: function(repos) {
    this.repos = repos
    this.emitChange()
  },
  emitChange: function() {
    this.emit('change')
  },
  getAllRepos: function() {
    return this.repos
  },
  addChangeListener: function(listener) {
    this.on('change', listener)
  },
  removeChangeListener: function(listener) {
    this.removeListener(listener)
  },
  dehydrate: function() {
    return {
      repos: this.repos
    }
  },
  rehydrate: function(state) {
    this.repos = state.repos
  }
})

module.exports = RepoStore