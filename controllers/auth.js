const express = require('express')
const router = express.Router()
const Users = require('../models/users')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', (req, res) => {
  res.send('hello')
})

router.post('/signup', async (req, res) => {
  let user = await Users.create(req.body)
  console.log('hello')
})

router.get('/logout', (req, res) => {
  res.send('hello')
})
module.exports = router
