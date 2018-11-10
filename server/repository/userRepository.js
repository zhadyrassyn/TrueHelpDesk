const mongoose = require('../db/connect');
const User = require('../db/model/user');

module.exports.save = async (user) => {
  return (new User(user)).save();
};