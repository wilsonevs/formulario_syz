const {Pool, Client} = require('pg');

const connectionData  = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

    const pool = new  Pool(connectionData);
    pool.connect;
    // pool.connect();
    console.log("Conexión a base de datos exitosamente.");

module.exports = pool;