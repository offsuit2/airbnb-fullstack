const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')
const Bookings = require('../models/bookings')

// Booking
router.post('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let user = req.user
      let booking = await Bookings.create({
        author: req.user._id,
        description: req.body.description,
        house: req.body.house
      })
      res.redirect('/houses/' + req.body.house)
    } else {
      res.redirect('/auth/login')
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
