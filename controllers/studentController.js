const URI = process.env.URI
const mongoose = require('mongoose')
const Student = require('../model/Student')

async function connectToDB() {
  try{
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME
    });
  }
  catch (err) {
    console.log(err);
  }
}

async function getStudents(req, res) {
  try {
    await connectToDB();
    const students = await Student.find().exec();
    res.render('students', {students: students});
  } catch (err) {
    console.log(err);
    res.status(500).send('Error!')
  }
}

async function createStudent(req, res) {
  try {
    const collection = await connectToDB();
    const student = new Student({
      name: req.body.name,
      subject: req.body.subject,
      score: req.body.score
    })
    await student.save();
    console.log('New student created:', student);
    res.status(201).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error!')
  }
}

module.exports = {getStudents, createStudent}
