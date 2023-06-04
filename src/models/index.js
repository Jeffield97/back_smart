const Hotel = require('./Hotel')
const Habitaciones = require('./Habitacion')
Hotel.hasMany(Habitaciones)
Habitaciones.belongsTo(Hotel)