const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('fuck')
})

router.get('/create', (req, res) => {
  res.send('this')
})

router.get('/:id', (req, res) => {
  res.send('bull')
})

router.get('/:id/edit', (req, res) => {
  res.send('shit')
})

router.post('/', (req, res) => {
  res.send('hello')
})

router.patch('/:id', (req, res) => {
  res.send('bull')
})

router.delete('/:id', (req, res) => {
  res.send('twat')
})
module.exports = router
