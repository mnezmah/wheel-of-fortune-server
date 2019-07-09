const express = require('express')
const Game = require('./model.js')
const router = express.Router()
const Sse = require('json-sse')

Game
  .findAll({ words: ['word'] })
  .then(words => {
    const json = JSON.stringify(words)
    const stream = new Sse(json)

    function onStream(request, response) {
      stream.init(request, response)
    }
    router.get('/stream', onStream)

    function onGame(request, response) {
      const { words, wheelValue, guessed } = request.body
      // const guessed=['a','b']

      Game
        .create({ words, wheelValue, guessed })
        .then(word => {
          Game.
            findAll()
            .then(words => {
              const json = JSON.stringify(words)

              stream.updateInit(json)

              stream.send(words)

              return response
                .status(201)
                .send(word)
            })
            .catch(err => {
              response.status(500)
                .json({
                  message: 'Someting went wrong',
                  error: err
                })
            })
        })
    }
    router.post('/game', onGame)

    // Game
    //     .put('/word',(req, res, next) => {
    //         const id = req.params.id
    //     })

  })

module.exports = router