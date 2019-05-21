const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('test this route')
})

router.get('/killkistkreydy', (req, res) => {
  res.send(status(200))
})

module.exports = router
