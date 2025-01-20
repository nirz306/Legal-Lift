// contains the mongodb connections 
require('dotenv').config();

const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://legallift892:TdKgee5QmkawPhT4@cluster0.stuzomi.mongodb.net/LegalLift?retryWrites=true&w=majority&appName=Cluster0";

console.log('MongoDB URL:', mongoURL);

async function connectDB() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB server');
    } catch (error) {
        console.error('Connection error:', error);
    }
}

connectDB();

// Handle disconnection events
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the connection
module.exports = mongoose.connection;