const express = require('express');
const hotelRoute = require('./hoteles.route');
const habitacionRoute = require('./habitaciones.route');
const router = express.Router();

router.use('/hoteles',hotelRoute)
router.use('/habitaciones',habitacionRoute)


module.exports = router;