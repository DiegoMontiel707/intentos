const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "sql5.freemysqlhosting.net",
    user: "sql5716376",
    password: "She2cgyQWV",
    database: "sql5116376",
    port: 3306,
});

connection.connect((error) => {
    if (error) {
        console.error('Error de conexión a la base de datos:', error);
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});

module.exports = connection;
