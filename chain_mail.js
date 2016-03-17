var _ = require("lodash");

var youngest = function(words){
      return _.chain(words)
      .sortBy()
      .map(function(word) {
        return _.toUpper(word) + 'CHAINED';
      })
    }

module.exports = youngest;
