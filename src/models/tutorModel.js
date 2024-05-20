// Modelo para o Tutor
const Sequelize = require('sequelize')
const db = require('../config/database.js')

const tutorModel = db.define(
  'Tutor',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    date_of_birth: Sequelize.DATE,
    zip_code: Sequelize.STRING,
  },
  {
    tableName: 'Tutors',
    timestamps: false,
  }
)

module.exports = tutorModel
