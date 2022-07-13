const express = require('express')
const router = express.Router()
const Users = require('../models/users')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', async (req, res) => {
  //checking user email and password
  let email = await Users.find({ email: req.body.email })
  let password = await Users.find({ password: req.body.password })
  console.log(email, password)
  res.send('hello')
})

router.post('/signup', async (req, res) => {
  // look for user with that email
  let email = await Users.find({ email: req.body.email })
  console.log(email)

  // if found
  if (email) {
    // send some error
  } else {
    // create account
    let user = await Users.create(req.body)
    // login
    req.login(user, err => {
      if (err) {
        throw err
      }
      res.redirect('/houses/list')
    })
    // redirect to houses page
  }
})

router.get('/logout', (req, res) => {
  res.send('hello')
})
module.exports = router
