const express = require('express')
const Game = require('./model.js')
const router = express.Router()
const Sse = require('json-sse')
const Player = require('../Players/model')

const stream = new Sse()
router.get('/stream', function (req, res, next) {
  Game
    .findAll()
    .then(game => {
      const json = JSON.stringify(game)
      stream.init(req, res)
      return stream.updateInit(json)
    })
    .catch(next)
})

router.get('/game/:id', function (req, res, next) {
  const id = req.params.id
  Game
    .findByPk(
      id,
      {
        include: [Player],
      }
    )
    .then(game => {
      const json = JSON.stringify(game)
      stream.updateInit(json)

      return res
        .status(200)
        .send(json)
    }).catch(next)
})

router.post('/game', function (req, res, next) {
  Game
    .create(req.body)
    .then(game => {
      const json = JSON.stringify(game)
      stream.updateInit(json)
      return res.status(201)
        .send(game)
    })
    .catch(next)
})

router
  .put('/game/:id', (req, res, next) => {
    const id = req.params.id
    Game
      .findByPk(id)
      .then(game => {
        const json = JSON.stringify(game)
        stream.updateInit(json)
        game.update(req.body)
          .then(updatedGame => res.status(200).send(updatedGame))
      })
      .catch(next)
  })
module.exports = router