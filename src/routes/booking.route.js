const { getAll, create, getOne, remove, update } = require('../controllers/booking.controller');
const express = require('express');

const bookingRoute = express.Router();

bookingRoute.route('/')
    .post(create);

bookingRoute.route('/:id')
    .get(getAll)
    .delete(remove)
    .put(update);

module.exports = bookingRoute;