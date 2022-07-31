const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')

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
    console.log(req.query)
    //rooms
    if (req.query.rooms != 0 && req.query.rooms != '') {
      ask.rooms = req.query.rooms
    }
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
    //houses
    let houses = await Houses.find(ask).sort(price)
    res.render('houses/list', { user, houses })
  } catch (err) {
    next(err)
  }
})

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

router.get('/:id', async (req, res, next) => {
  try {
    // find the house
    let house = await Houses.findOne({ _id: req.params.id })
    // put the house in the template and render it
    res.render('houses/one', { house, user: req.user })
  } catch (err) {
    throw err
  }
})

router.get('/:id/edit', (req, res) => {
  let user = req.user
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.render('houses/edit', { user })
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
  // res.send('hello', { house })
})

router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.send('Hello')
})

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.send('Hello')
})
module.exports = router
