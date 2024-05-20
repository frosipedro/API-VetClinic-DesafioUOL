const tutorService = require('../services/tutorServices.js')

const getAllTutorsWithPets = async (req, res) => {
  try {
    const tutors = await tutorService.getAllTutorsWithPets()
    res.status(200).json(tutors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const createTutor = async (req, res) => {
  try {
    await tutorService.createTutor(req.body)
    res.status(201).json('Tutor criado com sucesso.')
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateTutor = async (req, res) => {
  let checkTutor = await tutorService.searchTutorById(req.params.id)
  if (!checkTutor) {
    return res.status(404).json('Tutor não encontrado')
  } else {
    try {
      await tutorService.updateTutor(req.params.id, req.body)
      res.status(200).json('Tutor atualizado com sucesso')
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}

const deleteTutor = async (req, res) => {
  let checkTutor = await tutorService.searchTutorById(req.params.id)
  if (!checkTutor) {
    return res.status(404).json('Tutor não encontrado')
  } else {
    try {
      await tutorService.deleteTutor(req.params.id)
      res.status(200).json('Tutor deletado com sucesso.')
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}

module.exports = {
  getAllTutorsWithPets,
  createTutor,
  updateTutor,
  deleteTutor,
}
