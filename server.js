"use strict";

process.env.TOKEN_KEY = "Welcome1234"; // Puedes mover esto a una variable de entorno en Render

const express = require('express');
const router = require('./controllers/router');
const loginRouter = require('./controllers/login_router');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Configuración de CORS para aceptar cualquier origen (ajusta según necesites)
app.use(cors({
  origin: '*'
}));

app.use(express.json()); // Usa body-parser de Express para analizar las solicitudes
app.use(loginRouter);
app.use('/api/users', router);

app.get('/', (req, res) => res.send('Hello DASWorld!'));
app.route('/home').get((req, res) => res.send('DASWorld Home'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
