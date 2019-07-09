  
const Sequelize = require('sequelize')
const db = require('../db.js')

const Session = db.define(
    'session',
    {
        words: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        wheelValue: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        guessed: {
            type: Sequelize.ARRAY(Sequelize.STRING(1))
        },
    },
    { timestamps: false }
)
module.exports = Session 