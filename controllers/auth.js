const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.send('hello')
})

router.get('/signup', (req, res) => {
  res.send('hello')
})

router.post('/login', (req, res) => {
  res.send('hello')
})

router.post('/signup', (req, res) => {
  res.send('hello')
})

router.get('/logout', (req, res) => {
  res.send('hello')
})
module.exports = router
