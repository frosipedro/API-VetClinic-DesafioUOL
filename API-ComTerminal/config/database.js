const { Sequelize } = require('sequelize')

// Configure o Sequelize com suas informações de conexão
const db = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'database.db',
  logging: false,
})

module.exports = db
