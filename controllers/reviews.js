const express = require('express')
const router = express.Router()
const Reviews = require('../models/reviews')
const Houses = require('../models/houses')

router.post('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let user = req.user
      let house = req.house
      let review = await Reviews.create({
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
