// Imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const { body, validationResult } = require('express-validator');

dotenv.config();

const path = require('path');

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors()); 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

app.use((req, res) => {
    res.status(404).send('Error 404: Página no encontrada');
  }); 

// Starting the server
app.listen(3000, () => console.log('Server on port 3000'));
