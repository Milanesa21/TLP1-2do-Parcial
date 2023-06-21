// TODO: Crear modelo de datos de Reserva

const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

// Definición del modelo de Reserva
const reserva = sequelize.define('reserva', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false
  },
  habitacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidadPersonas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'Pendiente'
  },
  creadoEn: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
});

module.exports = reserva;
