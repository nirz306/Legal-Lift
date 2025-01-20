//creating a function to return all the questions and all the answers 
require('dotenv').config();
const mongoose=require('mongoose');
const { MongoClient } = require('mongodb');
const AnswerSchema = require("../models/quizAns");
// const db = process.env.MONGO_URL;
const db = "mongodb+srv://legallift892:TdKgee5QmkawPhT4@cluster0.stuzomi.mongodb.net/LegalLift?retryWrites=true&w=majority&appName=Cluster0";
const Answers = mongoose.model('answers',AnswerSchema,'answers');
const client = new MongoClient(db);


async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("LegalLift");
    return db.collection("Questions");
}

async function handleGetAllQuestions(req,res){
    try {
        let data = await GetConnection();
        let result = await data.find().toArray();
        console.log(result)
        res.json(result)
    }
    catch(error){
        console.error('Error fetching data',error)
        res.status(500).send("Error fetching data")
    } 
}

async function handleGetAllAnswers(req,res){
    try{
        console.log(req.body);
        const newAnswers = new Answers(req.body);
        const savedAnswers = await newAnswers.save();
        console.log('Answers data saved successfully : ',savedAnswers);
        res.json({message:'Answers data added successfully',newAnswers : savedAnswers});

    }catch(error)
    {
        console.log('Error saving data : ',error);
        res.status(500).json({error : 'Internal server error'});
    }
}


module.exports={
    handleGetAllAnswers,
    handleGetAllQuestions
}