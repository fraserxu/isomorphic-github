var superagent = require('superagent');

module.exports = function (dispatcher, payload, done) {
    superagent
        .get('https://api.github.com/users/fraserxu/repos')
        .set('Accept', 'application/json')
        .end(function (res) {
            var repos = JSON.parse(res.text);
            dispatcher.dispatch('RECEIVE_REPOS', repos);
            done();
        });
};
