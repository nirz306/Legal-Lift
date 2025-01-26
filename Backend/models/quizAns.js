const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    ans : [String]
});

   module.exports = AnswerSchema;