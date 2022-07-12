const mongoose = require('mongoose')

// Models

module.exports = mongoose.model('bookings', {
  author: {
    type: Objectid,
    required: true,
    ref: 'users'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  deescription: {
    type: String,
    required: true
  },
  house: {
    type: Objectid,
    required: true,
    ref: 'houses'
  }
})
