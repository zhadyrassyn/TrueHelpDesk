const mongoose = require('../connect');

const TaskType = mongoose.model('TaskType', {
  name: {
    type: String,
    trim: true,
  },
  time: Date,
});

module.exports = TaskType;