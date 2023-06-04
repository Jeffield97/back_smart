const { getAll, create, getOne, remove, update, getOneByHotelId } = require('../controllers/habitaciones.controller');
const express = require('express');

const habitacionRoute = express.Router();

habitacionRoute.route('/')
    .get(getAll)
    .post(create);

habitacionRoute.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
habitacionRoute.route('/hotel/:id')
    .get(getOneByHotelId)

module.exports = habitacionRoute;