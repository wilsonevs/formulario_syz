// Modulos
const express = require("express");
const dotenv =  require("dotenv");
const path = require("path");
const exp = require("constants");


// Inicializador del servidor
const app= express();

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Gestor de plantillas
app.set('view engine', 'ejs');

// Rutas de las vistas
let rutasViews= path.join(__dirname,'../app/views');
app.set('views', rutasViews);

// Middlewares (Manejo de infromación)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Configuración del dotenv

dotenv.config({path: path.join(__dirname, '../app/env/.env')});

// Cobfiguración del css
var rutaPublic =  express.static(path.join(__dirname,'../public'));
app.use('/src', rutaPublic);

module.exports= app;