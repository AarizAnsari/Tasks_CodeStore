const express = require('express');
const app = express();
const router = express.Router();
const Reservation = require('../model/reservationModel')
const cors = require('cors');
const { json } = require('express');

app.use(json());

app.use(cors({
    origin : "*"
}));


//TO GET ALL RESERVATIONS OF A TABLE ON A PERTICULAR DATE 
router.route('/reservations:table/:date')
    .get(async (req, res) => {
    const table = req.params['table'];
    const date = req.params['date'];
    const reservation = await Reservation.find({"table":table,"date":date});
    res.send(reservation);
});

//TO GET ALL RESERVATIONS SAVED IN DB
router.route('/reservations')
    .get(async (req, res) => {
    const reservation = await Reservation.find();
    res.send(reservation);
});

//TO ADD A NEW ENTRY IN DB
router.route('/reserve')
    .post(async (req, res) => {
    const reservation = await Reservation.create(JSON.parse(Object.keys(req.body)[0]));
    res.status(200).json(reservation);
});

//TO DELETE THE ENTRY FROM DB
router.route('/delete:id')
    .delete(async (req, res) => {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndDelete(id);
    res.status(200).json(reservation);
});

module.exports = router;