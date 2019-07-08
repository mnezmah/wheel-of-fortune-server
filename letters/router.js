const express = require('express')
const Letters = require('./model')
// const router = express.Router()
const { Router } = require('express')

const router = new Router()

router.get('/letters', (req, res, next) => {
  Letters
    .findAll()
    .then(letter => {
      res
        .status(200)
        .send(letter)
    }).catch(err =>
      res
        .status(500)
        .send(next(err)))
})

router
  .post('/letters',
    (req, res, next) => {
      Letters
        .create(req.body)
        .then(newLetter => {
          res
            .status(201)
            .send(newLetter)
        }).catch(err =>
          res.send(next(err)))
    })

module.exports = router