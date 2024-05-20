// Modelo para Pets
const Sequelize = require('sequelize')
const db = require('../config/database.js')
const tutorModel = require('./tutorModel.js')

const petModel = db.define(
  'Pet',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    species: Sequelize.STRING,
    carry: Sequelize.STRING,
    weight: Sequelize.FLOAT,
    date_of_birth: Sequelize.DATE,
    tutorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tutors',
        key: 'id',
      },
    },
  },
  {
    tableName: 'Pets',
    timestamps: false,
  }
)

// Estabelecendo relacionamento entre modelos
tutorModel.hasMany(petModel, {
  foreignKey: 'tutorId',
  as: 'pets',
})
petModel.belongsTo(tutorModel, {
  foreignKey: 'tutorId',
  as: 'tutor',
})

module.exports = petModel
