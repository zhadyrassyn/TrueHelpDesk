const bcrypt = require('bcrypt-nodejs');
const mongoose = require('../connect');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ['user', 'employee', 'admin']
  },
  location: {
    type: String,
    trim: true,
  },
  msisdn: {
    type: String,
    trim: true,
  },
});

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(passwordToCheck, callback) {
  const user = this;
  bcrypt.compare(passwordToCheck, user.password, (error, isEqual) => {
    if (error) {
      return callback(error);
    }

    callback(null, isEqual);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;