const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Hotel = sequelize.define('hotel', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_habitaciones: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad_personas: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    habilitado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Hotel;