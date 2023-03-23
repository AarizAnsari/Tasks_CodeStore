const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/userModel');
const app = express();




app.post('/create',async (req,res) => {
    const response = await User.create(req.body);
    res.send(response);
});

app.get('/check:username/:password',async(req,res) => {
    const username = req.params;
    const response = await User.find({"username":username,"password":password});
    res.send(response);
});

mongoose.connect('mongodb://0.0.0.0:27017').then(
    () => {
        console.log('connected');
        app.listen(4001, () => console.log(`Example app listening on port 4001!`))
    }
).catch((err) => { console.log(err); })