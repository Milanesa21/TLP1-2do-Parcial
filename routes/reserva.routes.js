// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reserva.controller');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/reservas', reservaController.obtenerTodasLasReservas);

// Formulario para crear una reserva
router.get('/reservas/crear', reservaController.mostrarFormularioCrearReserva);

// Formulario para actualizar una reserva
router.get('/reservas/:id/editar', reservaController.mostrarFormularioEditarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', reservaController.obtenerTodasLasReservasAPI);

// Crear una reserva
router.post('/api/reservas', reservaController.crearReserva);

// Actualizar una reserva
router.put('/api/reservas/:id', reservaController.actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', reservaController.eliminarReserva);

module.exports = router;
