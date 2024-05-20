const petService = require('../services/petServices.js')
const tutorService = require('../services/tutorServices.js')

const createPet = async (req, res) => {
  let checkTutor = await tutorService.searchTutorById(req.params.tutorId)

  if (!checkTutor) {
    return res.status(404).json('Tutor não encontrado')
  } else {
    try {
      petBody = req.body
      petBody.tutorId = req.params.tutorId

      await petService.createPet(petBody)
      res.status(201).json('Pet criado com sucesso.')
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}

const updatePet = async (req, res) => {
  let checkTutor = await tutorService.searchTutorById(req.params.tutorId)
  let checkPet = await petService.searchPetById(req.params.petId)

  if (!checkTutor) {
    return res.status(404).json('Tutor não encontrado')
  } else if (!checkPet) {
    return res.status(404).json('Pet não encontrado')
  } else {
    try {
      await petService.updatePet(req.params.petId, req.body)
      res.status(200).json('Pet atualizado com sucesso')
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}

const deletePet = async (req, res) => {
  let checkTutor = await tutorService.searchTutorById(req.params.tutorId)
  let checkPet = await petService.searchPetById(req.params.petId)

  if (!checkTutor) {
    return res.status(404).json('Tutor não encontrado')
  } else if (!checkPet) {
    return res.status(404).json('Pet não encontrado')
  } else {
    try {
      await petService.deletePet(req.params.petId)
      res.status(200).json('Pet deletado com sucesso')
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}

module.exports = {
  createPet,
  updatePet,
  deletePet,
}
