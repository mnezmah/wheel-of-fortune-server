const Sequelize = require('sequelize')
const db = require('../db.js')
const Category = require('../category/model')

const Word = db.define(
    'word',
    {
        content: {
            type: Sequelize.STRING,
            field: 'word_content'
        },
        clue: {
            type: Sequelize.STRING,
            field: 'word_clue'
        }

    },
    {timestamps:false}
)
Word.belongsTo(Category)

module.exports = Word
  