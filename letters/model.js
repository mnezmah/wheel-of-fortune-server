const Sequelize = require('sequelize') 
const db = require('../db')

const Letters = db.define(
  'letters', {
    letter: Sequelize.CHAR
  },
  {timestamps: false}
)

module.exports = Letters