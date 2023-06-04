const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Habitacion = sequelize.define('habitacion', {
    numero: {
        type: DataTypes.SMALLINT,
        unique:true,
        allowNull: false
    },
    costo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    impuesto: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    habilitado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    reservada: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Habitacion;