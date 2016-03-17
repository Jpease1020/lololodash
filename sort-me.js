var _ = require('lodash');

var worker = function (collection) {
  return _.sortBy(collection,"quantity").reverse();

      /* Also possible:
      // return _.sortBy(collection, function (item) {
      //     return -item.quantity;
      // });
       */
  };

 module.exports = worker;
