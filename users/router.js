const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router()

router
  .post(
    '/user',
    (req, res, next) => {
      const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
        //should add password_confirmation: req.body.password_confirmation
      }
      //if (user.email && user.pass && user.pass_confirm) {
        // if user.pass
      // }
      User
        .create(user)
        .then(user => {
          res
            .status(200)
            .send(user)
        })
        .catch(err =>
          res
            .status(422)
            .send(next(err))
        )
    }
  )

module.exports = router