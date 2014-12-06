var Dispatcher = require('dispatchr')()
var RepoStore = require('../stores/RepoStore')

Dispatcher.registerStore(RepoStore)

module.exports = Dispatcher