const axios = require('axios');
const db = require('../configDB/configDB');

const userAPI = 'https://api.jsonbin.io/v3/b/667c7cbdacd3cb34a85dd281';
const apiKey = "$2a$10$xvuLSLW78V17AsN2fK6H/On5ZsfYgjLuQQVIBK5Ztob1JaX7MEIWS";

const controller = {
    register: async function (req, res) {
        try {
            // Obtener los usuarios actuales
            const response = await axios.get(userAPI, {
                headers: {
                    'X-Master-Key': apiKey
                }
            });
            const users = response.data.record;

            // Validar si el email ya existe
            const emailExists = users.some(user => user.email === req.body.email);
            if (emailExists) {
                return res.status(400).send("El email ya existe");
            }

            // Crear un nuevo usuario
            const nuevoUsuario = {
                id: users.length + 1,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                password: req.body.password,
                estado: "activo",
                fecha_creacion: new Date()
            };

            // Insertar nuevo usuario en la base de datos MySQL
            db.query('INSERT INTO usuario SET ?', nuevoUsuario, (err, result) => {
                if (err) {
                    console.error('Error al insertar usuario en MySQL:', err);
                    return res.status(500).send('Error interno del servidor');
                }
                console.log('Usuario insertado en MySQL:', result);
            });

            // Agregar el nuevo usuario a la lista en JSONBin
            users.push(nuevoUsuario);

            // Actualizar los datos en JSONBin
            await axios.put(userAPI, users, {
                headers: {
                    'X-Master-Key': apiKey
                }
            });

            // Enviar respuesta al cliente
            res.status(200).send('Usuario creado con éxito');
        } catch (error) {
            console.error('Error al procesar el registro:', error);
            res.status(500).send('Error interno del servidor');
        }
    },

    login: async function (req, res) {
        try {
            // Obtener los usuarios actuales
            const response = await axios.get(userAPI, {
                headers: {
                    'X-Master-Key': apiKey
                }
            });
            const users = response.data.record;

            // Buscar el usuario por email y contraseña
            const user = users.find(user => user.email === req.body.email && user.password === req.body.password);
            if (user) {
                return res.status(200).json({ message: "Autenticación exitosa", user });
            } else {
                return res.status(400).json({ message: "Credenciales incorrectas" });
            }
        } catch (error) {
            console.error('Error al procesar el inicio de sesión:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
};

module.exports = controller;
