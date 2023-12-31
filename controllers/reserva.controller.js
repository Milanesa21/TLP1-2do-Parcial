const Reserva = require('../models/Reserva');

// Obtener todas las reservas
exports.obtenerTodasLasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

// Obtener una reserva por su ID
exports.obtenerReservaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

// Crear una reserva
exports.crearReserva = async (req, res) => {
  const { codigo, nombre, fecha } = req.body;
  try {
    const reserva = await Reserva.create({ codigo, nombre, fecha });
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
};

// Actualizar una reserva por su ID
exports.actualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { codigo, nombre, fecha } = req.body;
  try {
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      await reserva.update({ codigo, nombre, fecha });
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la reserva' });
  }
};

// Eliminar una reserva por su ID
exports.eliminarReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      await reserva.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};
