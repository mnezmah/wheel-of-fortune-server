const Player = require('./model')
const { Router } = require('express')

const router = new Router()

router.get('/scoreboard', (req, res, next) => {
  Player
    .findAll()
    .then(player => {
      res
        .status(200)
        .send(player)
    }).catch(next)
})

router.get('/players/:id', (req, res, next) => {
  const id = req.params.id
  Player
    .findByPk(id)
    .then(player => {
      res
        .status(200)
        .send(player)
    }).catch(next)
})


router.post('/players', (req, res, next) => {
  Player
    .create(req.body)
    .then(newPlayer => {
      res
        .status(201)
        .send(newPlayer)
    }).catch(next)
})

router.put('/players/:id', (req, res, next) => {
  const id = req.params.id

  Player
    .findByPk(id)
    .then(player => {
      player.update(req.body).then(updatedPlayer =>
        res
          .status(204)
          .send(updatedPlayer)
      ).catch(next)
    })
})

module.exports = router