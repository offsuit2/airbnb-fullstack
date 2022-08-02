const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')
const Bookings = require('../models/bookings')

//house home page search filters
router.get('/', async (req, res, next) => {
  try {
    //user
    let user = req.user
    //filter query
    // 1. Start with an empty cup
    let ask = {}
    //location
    if (req.query.location != undefined && req.query.location != '') {
      ask.location = req.query.location
    }
    //rooms
    if (req.query.rooms == 0) {
    } else if (req.query.rooms != undefined && req.query.rooms != '') {
      ask.rooms = req.query.rooms
    }
    console.log()
    //price
    if (req.query.price != undefined && req.query.price != '') {
      ask.price = req.query.price
    }
    //title
    if (req.query.price != undefined && req.query.title != '') {
      ask.title = req.query.title
    }
    //sort
    let price = req.query.sort
    if (price == 1) {
      price = 'price'
    } else {
      price = '-price'
    }
    console.log(req.query.rooms)
    //houses
    let houses = await Houses.find(ask).sort(price)
    res.render('houses/list', { user, houses })
  } catch (err) {
    next(err)
  }
})
//create house
router.get('/create', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let user = req.user
      res.render('houses/create')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
//single house
router.get('/:id', async (req, res, next) => {
  try {
    // find the house
    let house = await Houses.findOne({ _id: req.params.id })
    let booking = await Bookings.findOne({})
    console.log(booking.author)
    // put the house in the template and render it
    res.render('houses/one', { booking, house, user: req.user })
  } catch (err) {
    throw err
  }
})

//edit page
router.get('/:id/edit', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let user = req.user
      let house = await Houses.findOne({ _id: req.params.id })
      res.render('houses/edit', { house })
      console.log()
    } else {
      res.redirect('/auth/login')
    }
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // host
    req.body.host = req.user._id
    let house = await Houses.create(req.body)
    res.redirect('/houses/' + house._id)
    //redirct to /:id with obj:id
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      console.log(req.params.id)
      let houses = await Houses.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.name,
          description: req.body.description,
          rooms: req.body.rooms,
          location: req.body.location,
          price: req.body.price,
          photos: req.body.photos
        },
        {
          new: true
        }
      )
      res.render('houses/edit', { houses })
    } else {
      res.redirect('../auth/login')
    }
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.send('Hello')
})
module.exports = router
