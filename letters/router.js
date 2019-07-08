const express = require('express')
const Letters = require('./model')

const stream = new Sse()

router.get('/stream', (req, res, next) {
  Letters.findAll(
    { letter }
  ).then(letter => {
    
  })
})

const router = express.Router()
