var mongoose = require('mongoose');

var Car = mongoose.Schema({
    driver_man: {
    type: String,
    required: true
  },
    license_plate:{
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['IN', 'OUT'],
      required: true,
      default: 'IN'
    },
    date: {
      type:Date,
      dafault: Date.now
    }
});

module.exports = mongoose.model('Car', Car);
