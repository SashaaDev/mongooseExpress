const express = require('express')
const router = express.Router();
const studentController = require('../controllers/studentController')

router.get('/', studentController.getStudents)
router.post('/create', studentController.createStudent)

module.exports= {router};