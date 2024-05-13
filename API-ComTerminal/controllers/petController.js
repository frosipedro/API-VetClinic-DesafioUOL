const Pet = require('../models/petModel')
const chalk = require('chalk')

const createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body)
    res.status(201).json(chalk.green('Pet criado com sucesso.'))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updatePet = async (req, res) => {
  try {
    const petId = req.params.petId
    const updatedPet = await Pet.update(req.body, {
      where: { id: petId },
    })
    if (updatedPet[0] === 1) {
      res.json(chalk.green('Pet atualizado com sucesso'))
    } else {
      res.status(404).json('Pet não encontrado')
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deletePet = async (req, res) => {
  try {
    const petId = req.params.petId
    const deletedPet = await Pet.destroy({ where: { id: petId } })
    if (deletedPet) {
      res.json(chalk.green('Pet deletado com sucesso'))
    } else {
      res.status(404).json('Pet não encontrado')
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
