const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
  ,
  score: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User