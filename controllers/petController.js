const Pet = require('../models/petModel')

const createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body)
    res.status(201).json(newPet)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updatePet = async (req, res) => {
  try {
    const petId = req.params.id
    const updatedPet = await Pet.update(req.body, {
      where: { id: petId },
    })
    if (updatedPet[0] === 1) {
      res.json({ message: 'Tutor atualizado com sucesso' })
    } else {
      res.status(404).json({ message: 'Tutor não encontrado' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deletePet = async (req, res) => {
  try {
    const petId = req.params.id
    const deletedPet = await Pet.destroy({ where: { id: petId } })
    if (deletedPet) {
      res.json({ message: 'Tutor deletado com sucesso' })
    } else {
      res.status(404).json({ message: 'Tutor não encontrado' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createPet,
  updatePet,
  deletePet,
}
