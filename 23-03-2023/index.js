const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/userModel');
const app = express();

const router = require('./routes/authRoutes')

app.use('/',router);

mongoose.connect('mongodb://0.0.0.0:27017').then(
    () => {
        console.log('connected');
        app.listen(4001, () => console.log(`Example app listening on port 4001!`))
    }
).catch((err) => { console.log(err); })