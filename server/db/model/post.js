var mongoose = require('./../mongoose.connect').mongooseConnection;

var Post = mongoose.model('Post', {
  title: String,
  content: String,
  author: String,
  date: {
    type: Date,
    default: new Date()
  },
  image: String,
});

module.exports = Post;
