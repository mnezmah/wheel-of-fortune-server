
const { Router } = require('express')
const { toJWT } = require('./jwt')
const { toData } = require('./jwt')

const router = new Router()

const userRepository = {
    idCounter: 0,
    users: [],
    create: function (user) {
        if (this.users.findIndex(u => u.email === user.email) >= 0) {
            return Promise.reject('E-mail address already in use')
        }
        user.id = ++this.idCounter
        this.users.push(user)
        return Promise.resolve({ ...user })
    },
    findByEmail: function (email) {
        return Promise.resolve(this.users.find(u => u.email === email))
    },
    deleteById: function (id) {
        const lengthBefore = this.users.length
        this.users = this.users.filter(u => u.id !== id)
        return Promise.resolve(lengthBefore - this.users.length)
    }
}

// End-point to create a new user
router.post('/users', (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send('An email and password are required')
    }
    // Replace provided password, with a hash
    const user = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password)
    }
    userRepository.create(user)
        .then(u => res.status(201).send({ ...u, password: undefined }))
        .catch(e => res.status(400).send(e))
})

// Log-in end-point
router.post('/logins', (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send('An email and password are required')
    }
    userRepository.findByEmail(req.body.email)
        .then(dbUser => {
            if (dbUser && bcrypt.compareSync(req.body.password, dbUser.password)) {
                const token = jwt.sign({ id: dbUser.id }, secretKey)
                res.send({ token })
            } else {
                res.status(400).send('Incorrect email and password combination')
            }
        })
        .catch(e => next(e))
})

module.exports = router