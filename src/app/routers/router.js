// const conexion = require("../../config/connectionDb.js");
const {app} = require("express");
const { body, sanitize} = require ("express-validator");
const {
    getIndex, 
    // index_Post,
    index_Validacion_post,
} = require("../controllers/controller");



module.exports = (app) => {
    app.get("/", getIndex);
    app.post("/", [
        // validadores back-end
        body('observacion', 'Deja una observación. ¡Por favor!').exists().isLength({min:1}).trim(),
        body('empresa', 'Ingrese nombre de la empresa').exists().isLength({min:1}).trim(),
        body('email', 'Ingrese un email valido').exists().isLength({min:1}).isEmail().trim(),
        body('celular', 'Ingrese un celular valido').exists().isLength({min:1}).isNumeric().trim(),
        body('telefono', 'Ingrese un teléfono valido').exists().isLength({min:1}).isNumeric().trim(),
        body('lastname', 'Ingrese apellido completo').exists().isLength({min:1}).trim(),
        body('firstname','Ingresar un nombre valido').exists().isLength({min:1}).trim(),

        sanitize('observacion').escape(),
        sanitize('empresa').escape(),
        sanitize('email').escape(),
        sanitize('celular').escape(),
        sanitize('telefono').escape(),
        sanitize('lastname').escape(),
        sanitize('firstname').escape(),
        
    ], index_Validacion_post);

}