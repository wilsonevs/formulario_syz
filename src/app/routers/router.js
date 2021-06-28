// const conexion = require("../../config/connectionDb.js");
const {app} = require("express");
const {getIndex, postIndex} = require("../controllers/controller");



module.exports = (app) => {
    app.get("/", getIndex);
    app.post("/", postIndex);
}