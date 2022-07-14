const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
  }
  res.render('profile', { user })
})

router.patch('/', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
  }
  res.send('hello')
})
module.exports = router
