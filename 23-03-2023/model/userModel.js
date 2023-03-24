const mongoose = require('mongoose');

//RESERVATION SCHEMA
const userSchema = mongoose.Schema(
    {
        username : String,
        password : String,
        token: String
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;