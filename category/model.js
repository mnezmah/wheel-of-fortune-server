const Sequelize = require('sequelize')
const db = require('../db')
const Game = require('../games/model')

const Category = db.define(
    'category',
    {
        name: {
            type: Sequelize.STRING,
            field: 'category_name'
        }
    },
    {timestamps:false}
)

Category.hasMany(Game)
Game.belongsTo(Category)
module.exports = Category