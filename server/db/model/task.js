const mongoose = require('../connect');

const Task = mongoose.model('task', {
  status: {
    type: String,
    enum: ['N', 'A', 'S', 'C', 'D', 'AC', 'F'],
  },
  created: {
    type: Date,
    default: new Date(),
  },
  started: Date,
  finished: Date,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  performer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  taskType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskType',
  },

});

module.exports = Task;