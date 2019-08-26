const express = require('express')
const Word = require('./model.js')
const router = express.Router()

router.post('/category/:id', function (req, res, next) {
    const id = req.params.id
    const word = {
        content: req.body.content,
        clue: req.body.clue,
        categoryId: id
    }
    Word
        .create(word)
        .then(word => res.status(201).json(word))
        .catch(err => { next(err) })
})

router.delete('/word', function (req, res, next) {
    Word.destroy({
        where: { content: req.body.content }
    })
        .then(word => { res.json({ word: word }) })
        .catch(err => {
            next(err)
        })
})

module.exports = router