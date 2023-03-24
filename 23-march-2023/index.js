const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');

const router = require('./routes/reservationRoutes')

app.use('/',router);

//CONNECTING DB 
mongoose.connect('mongodb://0.0.0.0:27017').then(
    () => {
        console.log('connected');
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
).catch((err) => { console.log(err); })

