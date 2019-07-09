const Sequelize = require('sequelize')
const db = require('../db.js')

const Game = db.define(
    'game',
    {
        words: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        wheelValue: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        guessed: {
            type: Sequelize.ARRAY(Sequelize.CHAR)
        },
    },
    { timestamps: false }
)
module.exports = Game
