const Tutor = require('../models/tutorModel.js')
const Pet = require('../models/petModel.js')

async function getAllTutorsWithPets() {
  return await Tutor.findAll({
    include: [
      {
        model: Pet,
        as: 'pets',
      },
    ],
  })
}

async function createTutor(dados) {
  return await Tutor.create(dados)
}

async function updateTutor(id, dados) {
  return await Tutor.update(dados, { where: { id } })
}

async function deleteTutor(id) {
  return await Tutor.destroy({ where: { id } })
}

async function searchTutorById(id) {
  return await Tutor.findByPk(id)
}

module.exports = {
  getAllTutorsWithPets,
  createTutor,
  updateTutor,
  deleteTutor,
  searchTutorById,
}
