const Sequelize = require('sequelize')
const db = require('../db')
const Game = require('../games/model')

const Player = db.define(
  'players', {
    name: Sequelize.STRING,
    score: Sequelize.INTEGER,
    turn: {
      type: Sequelize.INTEGER,
      defaultValue: 3
    }
  },
  { timestamps: false }
)

Player.belongsTo(Game)
Game.hasMany(Player)

module.exports = Player