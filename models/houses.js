const mongoose = require('mongoose')

// Models

module.exports = mongoose.model('houses', {
  deescription: {
    type: String,
    required: true
  },
  host: {
    type: Objectid,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photos: [String],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
