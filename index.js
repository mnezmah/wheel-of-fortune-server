const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const letterRouter = require('./letters/router')
const userRouter = require('./users/router')
const wordRouter = require('./word/router')
const categoryRouter = require('./category/router')
const gameRouter = require('./games/router')

const app = express()

const jsonParser = bodyParser.json()
app.use(cors())
app.use(jsonParser)
app.use(letterRouter)
app.use(userRouter)
app.use(wordRouter)
app.use(categoryRouter)
app.use(gameRouter)



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`))

