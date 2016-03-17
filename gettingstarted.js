var _ = require("lodash");

var worker = function(input) {
  return _.filter(input, {"active": true})
    };

module.exports = worker;
