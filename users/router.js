const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router()

router
  .post(
    '/user',
    (req, res, next) => {
       bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            })
          } else {
            const user  = new User ({
              name: req.body.name,
              score: req.body.score,
              password: hash
            })
            user.save()
            .then(result => {
              console.log(result);
              res.status(201).json({
                message: 'User created'
              })
            })
            .catch(err => {
              console.log(err)
              res.status(500).json({
                error: err
              })
            })
          }
        })
      
      })

  //     if(!name || !password) {
  //       res.status(400).send({
  //         message: 'Please supply a valid name and password'
  //       })
  //     }
  //       //should add password_confirmation: req.body.password_confirmation
  //     },
  //     //if (user.email && user.pass && user.pass_confirm) {
  //       // if user.pass
  //     // }
  //     User
  //       .create(user)
  //       .then(user => {
  //         res
  //           .status(200)
  //           .send(user)
  //       })
  //       .catch(err =>
  //         res
  //           .status(422)
  //           .send(next(err))
  //       )
  // )

module.exports = router