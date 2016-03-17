 var _ = require("lodash");

 var worker = function(collection) {
   return _.forEach(collection, function(city, key, collection){
     if (city.population > 1){
       city.size = 'big'
     } else if (city.population > 0.5) {
       city.size = 'med'
     } else {
       city.size = 'small'
     }
   });
}

module.exports = worker;
