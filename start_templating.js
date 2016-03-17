var _ = require("lodash");

var worker = function(input) {
 var username = input.name
 var logins = _.size(input.login)

 return _.template('Hello <%= name %> (logins: <%= num %>)')({ name: username, num: logins })
    };

module.exports = worker;
