// Modelo para Pets
const Sequelize = require('sequelize')
const db = require('../db/connection')

const petModel = db.define('Pet', {
  name: {
    type: Sequelize.STRING,
  },
  species: {
    type: Sequelize.STRING,
  },
  carry: {
    type: Sequelize.STRING,
  },
  weight: {
    type: Sequelize.FLOAT,
  },
  date_of_birth: {
    type: Sequelize.INTEGER,
  },
  tutorID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Tutor',
      key: 'id',
    },
  },
})

// Estabelecendo relacionamento entre modelos
const tutorModel = require('./tutorModel')
tutorModel.hasMany(petModel, { foreignKey: 'tutorID' })
petModel.belongsTo(tutorModel, { foreignKey: 'tutorID' })

module.exports = petModel
