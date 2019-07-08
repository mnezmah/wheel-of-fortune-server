const Sequelize = require('sequelize') 
const db = require('../db')

const Letters = db.define(
  'letters', {
    letter: Sequelize.CHAR
  }
)

module.exportd = Letters