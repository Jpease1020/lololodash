var _ = require("lodash");
//
var worker = function(collection) {

  var result = {
    hot: [],
    warm: []
  };

    function compare (temperature) {
        return temperature > 19;
    };

    _.forEach(collection, function (value, key) {
      if (_.every(value, compare)){
        result.hot.push(key)
      } else if (_.some(value, compare)){
        result.warm.push(key)
      }

    });
    return result;
};


module.exports = worker;
