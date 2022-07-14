const express = require('express')
const router = express.Router()
const Users = require('../models/users')

router.get('/login', (req, res) => {
  let user = req.user
  res.render('login', { user })
})

router.get('/signup', (req, res) => {
  res.render('signup', { user })
})

router.post('/login', async (req, res, next) => {
  //checking user email and password
  try {
    let user = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    console.log(user)
    if (user) {
      req.login(user, err => {
        if (err) {
          next(err)
        }
        res.redirect('/houses')
      })
    } else {
      throw new Error('Wrong email or password')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    // look for user with that email
    let email = await Users.findOne({ email: req.body.email })
    // if found
    if (email) {
      // send some error
      throw new Error('email taken')
    } else {
      // create account
      let user = await Users.create(req.body)
      // login
      req.login(user, err => {
        if (err) {
          throw err
        }
        res.redirect('/')
      })
      // redirect to houses page
    }
  } catch (err) {
    next(err)
  }
})

router.get('/logout', async (req, res, next) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    // continue coding here
    res.redirect('/auth/login')
  })
})
module.exports = router
