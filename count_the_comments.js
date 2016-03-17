var _ = require("lodash");

var userCommentCount = function(userComments) {
  var grouped_comments =  _.groupBy(userComments, 'username')

  return _.map(grouped_comments, function(value, key){
    return { username: key, comment_count: _.size(value)}
  }).reverse()
};

module.exports = userCommentCount;
