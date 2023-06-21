const ctrlReservas = {};

const router = require('express').Router();
const reservaController = require('../controllers/reserva.controller');

// Obtener todas las reservas
router.get('/api/reservas', reservaController.getAllReservas);

// Obtener una reserva por ID
router.get('/api/reservas/:id', reservaController.getReservaById);

// Crear una reserva
router.post('/api/reservas', reservaController.createReserva);

// Actualizar una reserva
router.put('/api/reservas/:id', reservaController.updateReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', reservaController.deleteReserva);

module.exports = router;


module.exports = ctrlReservas;