const express = require('express')
const router = express.Router()
const tutorController = require('../controllers/tutorController')

router.get('/tutors', tutorController.getAllTutorsWithPets)
router.post('/tutor', tutorController.createTutor)
router.put('/tutor/:id', tutorController.updateTutor)
router.delete('/tutor/:id', tutorController.deleteTutor)

module.exports = router
