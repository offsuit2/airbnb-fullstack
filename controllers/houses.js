const express = require('express')
const router = express.Router()
const Users = require('../models/users')

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

router.get('/create', (req, res) => {
  let user = req.user
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.render('houses/create', { user })
})

router.get('/:id', (req, res) => {
  let user = req.user
  res.send('khgiu', { user })
})

router.get('/:id/edit', (req, res) => {
  let user = req.user
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.render('houses/edit', { user })
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
  res.send('hello')
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
