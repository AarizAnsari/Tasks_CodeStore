const mongoose = require('mongoose');

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