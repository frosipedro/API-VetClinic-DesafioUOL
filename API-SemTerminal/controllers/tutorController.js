const Tutor = require('../models/tutorModel')
const Pet = require('../models/petModel')
const chalk = require('chalk')

const getAllTutorsWithPets = async (req, res) => {
  try {
    const tutors = await Tutor.findAll({
      include: [
        {
          model: Pet,
          as: 'pets',
        },
      ],
    })

    res.json(tutors)
  } catch (error) {
    console.error(chalk.red('Erro na requisição:'), error)
    res.status(500).json({ error: error.message })
  }
}

const createTutor = async (req, res) => {
  try {
    const newTutor = await Tutor.create(req.body)
    res.status(200).json(chalk.green('Tutor criado com sucesso.'))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateTutor = async (req, res) => {
  try {
    const tutorId = req.params.id
    const updatedTutor = await Tutor.update(req.body, {
      where: { id: tutorId },
    })
    if (updatedTutor[0] === 1) {
      res.status(201).json(chalk.green('Tutor atualizado com sucesso'))
    } else {
      res.status(404).json(chalk.red('Tutor não encontrado'))
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteTutor = async (req, res) => {
  try {
    const tutorId = req.params.id
    const deletedTutor = await Tutor.destroy({ where: { id: tutorId } })
    if (deletedTutor) {
      res.status(200).json(chalk.green('Tutor deletado com sucesso.'))
    } else {
      res.status(404).json(chalk.red('Tutor não encontrado.'))
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllTutorsWithPets,
  createTutor,
  updateTutor,
  deleteTutor,
}
