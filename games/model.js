const Sequelize = require('sequelize')
const db = require('../db.js')

const Game = db.define(
    'game',
    {
        words: {
            type: Sequelize.ARRAY(Sequelize.STRING),
        }
    },
    {timestamps:false}
)
module.exports = Game
  