const Sequelize = require('sequelize')
const db = require('../db')

const Letters = db.define(
  'letters', {
    letter: Sequelize.STRING(1)
  },
  { timestamps: false }
)

module.exports = Letters