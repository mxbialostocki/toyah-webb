const path = require('path')
const express = require('express')

const server = express()

// const routes = require('../routes/routes')

server.use(express.static(path.join(__dirname, './public')))
server.use(express.json())

// server.use('/v1/routes', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = server
