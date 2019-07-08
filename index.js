const express = require('express')
const Sse = require('json-sse')
const bodyParser = require('body-parser')
const cors = require('cors')
const Letters = require('./letters/model')

const app = express()

const jsonParser = bodyParser.json()
app.use(cors())
app.use(jsonParser)

const Letters = require('./letters/model')


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`))

