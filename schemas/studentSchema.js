module.exports.studentSchema = {
  name: {type: String, required: true},
  subject: {type: String, required: true},
  score: {type: Number, default: 2}
}