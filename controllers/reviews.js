const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('../auth/login')
  }
})

module.exports = router
