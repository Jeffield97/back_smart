const express = require('express');
const hotelRoute = require('./hoteles.route');
const habitacionRoute = require('./habitaciones.route');
const bookingRoute = require('./booking.route');
const router = express.Router();

router.use('/hoteles',hotelRoute)
router.use('/habitaciones',habitacionRoute)
router.use('/reservas',bookingRoute)


module.exports = router;