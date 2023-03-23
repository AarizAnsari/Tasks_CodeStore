const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');
const Reservation = require('./model/reservationModel')
const cors = require('cors');
const { json } = require('express');

app.use(json());

app.use(cors({
    origin : "*"
}));

app.get('/',(req,res) => {
    res.send('hello');
})

//TO GET ALL RESERVATIONS OF A TABLE ON A PERTICULAR DATE 
app.get('/reservations:table/:date', async (req, res) => {
    const table = req.params['table'];
    const date = req.params['date'];
    const reservation = await Reservation.find({"table":table,"date":date});
    res.send(reservation);
});

//TO GET ALL RESERVATIONS SAVED IN DB
app.get('/reservations', async (req, res) => {
    const reservation = await Reservation.find();
    res.send(reservation);
});

//TO ADD A NEW ENTRY IN DB
app.post('/reserve', async (req, res) => {
    const reservation = await Reservation.create(JSON.parse(Object.keys(req.body)[0]));
    res.status(200).json(reservation);
});

//TO DELETE THE ENTRY FROM DB
app.delete('/delete:id', async (req, res) => {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndDelete(id);
    res.status(200).json(reservation);
});

//CONNECTING DB 
mongoose.connect('mongodb://0.0.0.0:27017').then(
    () => {
        console.log('connected');
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
).catch((err) => { console.log(err); })

