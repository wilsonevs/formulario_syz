// Modulos
const express = require("express");
const dotenv =  require("dotenv");
const path = require("path");
const morgan = require("morgan");

// Inicializador del servidor
const app= express();

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Gestor de plantillas
app.set('view engine', 'ejs');

// Mostrar el estado
app.use(morgan('dev'));

// Rutas de las vistas
let rutasViews= path.join(__dirname,'../app/views');
app.set('views', rutasViews);

// Middlewares (Manejo de infromación)
app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configuración del dotenv

dotenv.config({path: path.join(__dirname, '../../.env')});

// Cobfiguración del css
var rutaPublic =  express.static(path.join(__dirname,'../public'));
app.use('/src', rutaPublic);

module.exports= app;