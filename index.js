const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const letterRouter = require('./letters/router')
const userRouter = require('./users/router')

const app = express()

const jsonParser = bodyParser.json()
app.use(cors())
app.use(jsonParser)
app.use(letterRouter)
app.use(userRouter)



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`))

