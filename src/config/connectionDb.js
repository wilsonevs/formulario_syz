const {Client} = require('pg');

//funciona porque el servidor esta conectado con anterioridad a dotenv que esta configurado
//y ligado a la carpeta ./env/.env


const connectionData  = {
    host: process.env.DB_HOST,
    pass: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
};

console.log("Conectado exitosamente a BD");

const client = new  Client(connectionData);

//probar el modulo:
module.exports = client ;
