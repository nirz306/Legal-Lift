// const client = new MongoClient(db);
// const quizQues = require('../models/quizQues');
const express = require("express");
const router = express.Router();
const {restrictToLoggedinUserOnly} = require("../middleware/auth")


const {handleGetAllAnswers, handleGetAllQuestions} = require("../controllers/quiz");
router.get('/Questions',restrictToLoggedinUserOnly,handleGetAllQuestions);
router.get('/answers',restrictToLoggedinUserOnly,handleGetAllAnswers);

 module.exports= router;

 