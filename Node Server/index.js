//For deployment on render

const express = require('express');
const router = express.Router();
const cors=require('cors');
const mongoose = require('mongoose');
router.use(express.json());
const db = "mongodb+srv://legallift892:TdKgee5QmkawPhT4@cluster0.stuzomi.mongodb.net/LegalLift?retryWrites=true&w=majority&appName=Cluster0";
const app=express();
app.use(cors());
mongoose.connect(db).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const helpSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    password: String,
});

const quizSchema = new mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    ques:String,
    A: String,
    B: String,
    C: String,
    D: String,
    ans: String
  });
const AnswerSchema = new mongoose.Schema({
    ans : [String]
});
const Help = mongoose.model('help', helpSchema,'help');
const Answers = mongoose.model('answers',AnswerSchema,'answers');
const client = new MongoClient(db);

async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("LegalLift");
    return db.collection("Questions");
}

router.get('/Questions',async (req,res) =>{
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
});

router.post('/answers',async(req,res)=>{
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
});
router.post('/help', async (req, res) => {
    try {
        console.log(req.body);
        const newHelp = new Help(req.body);
        const savedHelp = await newHelp.save();
        console.log('Help data saved successfully:', savedHelp);
        res.json({ message: 'Help data added successfully', newHelp: savedHelp });
    } catch (error) {
        console.error('Error saving help data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
const PORT = process.env.PORT || 3000;
app.use(router);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});