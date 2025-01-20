const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    ans : [String]
});

//  const QuizAns = mongoose.model('User', AnswerSchema);
  module.exports = AnswerSchema;