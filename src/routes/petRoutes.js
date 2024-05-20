const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController.js')

router.post('/pet/:tutorId', petController.createPet)
router.put('/pet/:petId/tutor/:tutorId', petController.updatePet)
router.delete('/pet/:petId/tutor/:tutorId', petController.deletePet)

module.exports = router
