var _ = require("lodash");

var grouped_orders = function(orders){
  var group = _.groupBy(orders, 'article')
  return _.map(group, function(value, key){
    var total_orders = _.reduce(value, function(sum, n) {
      return sum + n.quantity;
    }, 0);
    return { "article": parseInt(key), "total_orders": total_orders }
  }).reverse()
};

module.exports = grouped_orders;
