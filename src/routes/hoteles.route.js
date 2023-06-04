const { getAll, create, getOne, remove, update } = require('../controllers/hoteles.controller');
const express = require('express');

const hotelRoute = express.Router();

hotelRoute.route('/')
    .get(getAll)
    .post(create);

hotelRoute.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = hotelRoute;