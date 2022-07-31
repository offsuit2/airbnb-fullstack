const express = require('express')
const router = express.Router()
const Users = require('../models/users')

router.get('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      //check if logged in
      let user = await Users.findOne({
        email: req.body.email,
        password: req.body.password
      })
    } else {
      res.redirct('/auth/login')
    }
  } catch (e) {
    next(e)
  }
  res.render('profile', { user: req.user })
})
// //patch
router.patch('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let user = await Users.findByIdAndUpdate(
        '62cfcb4bac77d114df7bcbcc',
        {
          name: req.body.name,
          email: req.body.email,
          avatar: req.body.avatar
        },
        {
          new: true
        }
      )
      req.login(user, err => {
        if (err) {
          throw err
        }
        res.redirect('/profile')
      })
      console.log(req.user.name)
    } else {
      // res.redirct('/auth/login')
    }
  } catch (err) {
    next(err)
  }
  res.render('profile', { user: req.user })
})
module.exports = router
