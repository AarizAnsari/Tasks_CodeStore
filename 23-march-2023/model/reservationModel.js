const mongoose = require('mongoose');

//RESERVATION SCHEMA
const reservationSchema = mongoose.Schema(
    {
        from: Number,
        to: Number,
        date : String,
        table : String
    }
);

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;