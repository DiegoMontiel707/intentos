const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const user = require('./controller/userController');

app.get("/", (req, res) => {
    let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/667c7cbdacd3cb34a85dd281',
        headers: {
            'Content-Type': 'application/json',
            "X-Master-Key": "$2a$10$t6kxk1p/6N2zM/VE.Eo8P.nh23Jmxv9C81KxM9mBMF3LYVkdqYCCS"
        }
    };
    axios(config)
        .then(result => {
            res.send(result.data.record);
        });
});

//Solicitamos la conexión a la BD



/* const conexion = require('./configDB/configDB.js')

app.get("/todos-los-Usuarios", (req, res) => {
conexion.connect(function (err) {
if (err) throw err;
//Select all customers and return the result object:
conexion.query("SELECT * FROM sql10714615.usuario", function (err, result, fields) {
if (err) throw err;
res.send(result)
});
});
})




app.post('/registro-usuario', user.register);
app.post('/login', user.login);

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT);
}); */