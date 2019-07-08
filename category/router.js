const express = require('express')
const Category = require('./model.js')
const Word = require('../word/model')
const router=express.Router()

router.post('/category/', function (req, res,next) {
    Category
        .create(req.body)
        .then(word => res.status(201).json(word))
        .catch(err => {next(err)})
})

router.get('/category/:id', function (req, res, next) {
    Word
        .findAll({where:{categoryId:req.params.id}},{include:[Category]})
        .then(word => {res.json({ words: word })})
        .catch(err => {next(err)
      })
  })

module.exports = router