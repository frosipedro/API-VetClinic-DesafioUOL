const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')

router.post('/:tutorId', petController.createPet)
router.put('/:petId/tutor/:tutorId', petController.updatePet)
router.delete('/:petId/tutor/:tutorId', petController.deletePet)

module.exports = router
