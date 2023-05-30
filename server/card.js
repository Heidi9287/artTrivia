const Sequelize = require('sequelize');
const db = require('./db');
const Card = db.define('card', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  detailAnswer: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
  },
});

module.exports = Card;
