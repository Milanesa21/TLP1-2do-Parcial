const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

class Reserva extends Model {}

Reserva.init(
  {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Reserva'
  }
);

module.exports = Reserva;
