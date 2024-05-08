// Modelo para o Tutor
const Sequelize = require('sequelize')
const db = require('../db/connection')

const tutorModel = db.define(
  'Tutor',
  {
    name: Sequelize.STRING,
    phone: Sequelize.INTEGER,
    email: Sequelize.STRING,
    date_of_birth: Sequelize.STRING,
    zip_code: Sequelize.INTEGER,
  },
  {
    tableName: 'Tutor',
  }
)

module.exports = tutorModel
