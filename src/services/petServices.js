const Pet = require('../models/petModel.js')

async function createPet(dados) {
  return await Pet.create(dados)
}

async function updatePet(id, dados) {
  return await Pet.update(dados, { where: { id } })
}

async function deletePet(id) {
  return await Pet.destroy({ where: { id } })
}

async function searchPetById(id) {
  return await Pet.findByPk(id)
}

module.exports = {
  createPet,
  updatePet,
  deletePet,
  searchPetById,
}
