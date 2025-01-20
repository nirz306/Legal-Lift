const mongoose = require('mongoose');

 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    quiz:{
        type:Number,
        required: [true, 'Points are required'],
        default: 0
    }
});
 
const User = mongoose.model('User', userSchema);
module.exports = User;