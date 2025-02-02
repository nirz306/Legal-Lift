const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const { restrictToLoggedinUserOnly } = require('./middleware/auth');
// const taskRoute = require("./routes/task");
const userRoute = require("./routes/user");
const quizRoute = require("./routes/quiz");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();


const db = require('./connect'); 
const PORT = process.env.PORT || 3000;  


app.get('/server-time', (req, res) => {
    res.json({ serverTime: new Date().toISOString() });
});

console.log("Current server time:", new Date().toISOString());
// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3001', 'https://your-frontend-url.vercel.app'], 
    credentials: true
  };
  app.use(cors(corsOptions));
  


app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

// Register routes

app.use("/user", userRoute);  
app.use('/api',quizRoute)
//     /user/login and /user/signup

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});