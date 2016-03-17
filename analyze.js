var _ = require("lodash");

var result = function(input) {
  var average = (_.sumBy(input, 'income')) / (_.size(input))
  var overperformers = _.filter(input, function(person){
    return person.income > average
  })
  var underperformers = _.filter(input, function(person){
    return person.income <= average
  })

  return { "average": average,
          "underperform": _.sortBy(underperformers, "income"),
          "overperform": _.sortBy(overperformers, "income")
         }
};

module.exports = result;
