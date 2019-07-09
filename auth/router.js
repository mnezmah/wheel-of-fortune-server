
// const { Router } = require('express')
const express = require('express')
const {toJWT } = require('./jwt')
// const { toData } = require('./jwt')
const User = require('../users/model')
const bcrypt = require('bcrypt')

const router = express.Router()


router.post('/user/login', (req, res, next) => {
  const {name, password} = req.body

  if(!name || !password) {
    res.status(400).send({
      message: 'Supply a name and password'
    })
  }

  User.findOne({
    where: {
      name
    }
  })
    .then(user => {
      if (!user) {
        res.status(400).send({
          message: 'Invalid name'
        })
      }

      if (bcrypt.compareSync(password, user.password)) {
        res.send({
          jwt: toJWT({userId: user.id})
        })
      }

      else {
        res.status(400).send({
          message: 'Incorrect password'
        })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({
        message: 'Error'
      })
    })
})

// //Verify Token
// function verifyToken(request, response, next) {
//     const bearerHeader = request.headers['authorization']

// if(typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(' ')
//     const bearerToken = bearer[1]
//     request.token = bearerToken
//     next();
// } else {
//     response.sendStatus(403)
// }
// }


module.exports = router