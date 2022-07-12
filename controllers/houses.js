const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('houses/list')
})

router.get('/create', (req, res) => {
  res.send('kjbgh')
})

router.get('/:id', (req, res) => {
  res.send('khgiu')
})

router.get('/:id/edit', (req, res) => {
  res.send('jhiugi')
})

router.post('/', (req, res) => {
  res.send('hello')
})

router.patch('/:id', (req, res) => {
  res.send('hjg')
})

router.delete('/:id', (req, res) => {
  res.send('hjvgyuf')
})
module.exports = router
