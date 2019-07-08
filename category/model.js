const Sequelize = require('sequelize')
const db = require('../db.js')

const Category = db.define(
    'category',
    {
        name: {
            type: Sequelize.STRING,
            field: 'category_name'
        }
    }
)
module.exports = Category
  