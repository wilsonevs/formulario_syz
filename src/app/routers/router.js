// const conexion = require("../../config/connectionDb.js");
const {app} = require("express");
const { body} = require ("express-validator");
const {
    getIndex, 
    // index_Post,
    index_Validacion_post,
    getW,   
} = require("../controllers/controller");



module.exports = (app) => {
    app.get("/", getIndex);
    app.post("/", [
        // validadores back-end
        body('firstname','Ingresar un nombre valido').exists().isLength({min:3}).trim().matches('^\w+\s?\w+?\s?$'),
        body('lastname', 'Ingrese apellido completo').exists().isLength({min:3}).trim().matches('^\w+\s?\w+?\s?$'),
        body('telefono', 'Ingrese un teléfono valido').exists().isNumeric().trim().matches('^[+|\d]?\s?\d{1,10}?\s?\d{1,10}?\s?\d{1,10}\s?\d{1,10}\s?$'),
        body('celular', 'Ingrese un celular valido').exists().isNumeric().trim().matches('^[+|\d]?\s?\d{1,10}?\s?\d{1,10}?\s?\d{1,10}\s?\d{1,10}\s?$'),
        body('email', 'Ingrese un email valido').exists().isEmail().trim().matches('^([a-zA-Z0-9_\.\+-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$'),
        body('empresa', 'Ingrese nombre de la empresa').exists().isLength({min:3}).trim().matches('\s?([\s._+-]?\w+)'),
        body('observacion', 'Deja una observación. ¡Por favor!').exists().isLength().trim(),
    ], index_Validacion_post);

    app.get("/prueba", getW);

}