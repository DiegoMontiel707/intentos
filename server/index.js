const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./controller/userController');
const db = require('./configDB/configDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.post('/registro-usuario', user.register);
app.post('/login', user.login);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
