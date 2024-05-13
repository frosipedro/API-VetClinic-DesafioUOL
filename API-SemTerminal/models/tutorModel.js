// Modelo para o Tutor
const { Sequelize } = require('sequelize')
const db = require('../config/database')

const tutorModel = db.define(
  'Tutor',
  {
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    date_of_birth: Sequelize.DATEONLY,
    zip_code: Sequelize.STRING,
  },
  {
    tableName: 'Tutor',
    timestamps: false,
  }
)

module.exports = tutorModel
