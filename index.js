const express = require('express')
const app = express()
const Letters = require('./letters/model')


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`))

