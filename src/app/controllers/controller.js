
const {} = require("../../config/connectionDb");

const getIndex = (req, res) => {
    res.render("formulario.ejs");
}


const postIndex = async (req, res) => {
    const { firstname, lastname, telefono, celular, email, empresa, observacion } = req.body;
    console.log(req.body);
    pool.query("INSERT INTO contactanos VALUES ($1, $2, $3, $4, $5, $6, $7)",[firstname, lastname, telefono, celular, email, empresa,observacion],
      async (error, results) => {
        if (error) {
          console.log("Que error tengo" + error);
        } else {
          res.render("index.ejs", {
            login,
            alert: true,
            alertTitle: "Enviado",
            alertMessage: "¡Te estaremos contactando!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: false,
            ruta: "/",
          });
        }
      }
    );
  };



module.exports = {getIndex, postIndex}