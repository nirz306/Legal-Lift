const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    ques:String,
    A: String,
    B: String,
    C: String,
    D: String,
    ans: String
  });

  const QuizQues = mongoose.model('User', quizSchema);
  module.exports = QuizQues;