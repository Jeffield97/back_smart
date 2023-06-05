const catchError = require('../utils/catchError');
const bookingController = require('../models/Booking');
const Habitacion = require('../models/Habitacion');

const getAll = catchError(async(req, res) => {
    // console.log(req.params.id)
    const results = await bookingController.findAll({where:{hotelId:req.params.id}});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await bookingController.create(req.body);
    const room = await Habitacion.findByPk(req.body.habitacionId);
    // room.dataValues.reservado=true
    console.log("ROOM OBTENIDO:",room.dataValues.id)
    await Habitacion.update({habilitado:false},{where:{id:room.dataValues.id}})
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await bookingController.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await bookingController.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await bookingController.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}