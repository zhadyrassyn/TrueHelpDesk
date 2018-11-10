const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log('connected to db successfully');
}).catch((error) => {
  console.log('error on connecting to db ', error);
});

module.exports = mongoose;