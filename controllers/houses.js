const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')

router.get('/', async (req, res, next) => {
  try {
    //user
    let user = req.user
    //if theres a user
    res.render('houses/list', { user })
  } catch {
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

router.get('/:id', (req, res) => {
  let user = req.user
  res.send('hello', { user })
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
    // console.log(req.body)
    req.body.host = req.user._id
    let house = await Houses.create(req.body)
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
