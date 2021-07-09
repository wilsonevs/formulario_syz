const pool = require("../../config/connectionDb");

const getIndex = (req, res) => {
    res.render("formulario.ejs");
}


const postIndex = async (req, res) => {
  const { firstname, lastname, telefono, celular, email, empresa, observacion } = req.body;
  const datos="INSERT INTO contactanos (firstname, lastname, telefono, celular, email, empresa, observacion) VALUES ($1, $2, $3, $4, $5, $6, $7)";
  const values= [firstname, lastname, telefono, celular, email, empresa, observacion ];
  console.log(req.body);
  try {
    pool.query(datos, values, (err, res) => {
        
      if (error) {
        console.log("Que error tengo" + error);
      } else {
        res.render("index.ejs", {
          alert: true,
          alertTitle: "Enviado",
          alertMessage: "¡Te estaremos contactando!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: false,
          ruta: "/",
        });
      }

      });

  } catch (error) {
    console.log("El ERROR ES: "+error);
    return res.status(500).json('Internal server error');
  }
};


const getW = async (req, res) =>{
  try {
    const querys= "SELECT * FROM nombres";
    pool.query(querys, (error, results) =>{
      res.render("prueba.ejs", {
        datos: results,
      })
    })

  } catch (error) {
    console.log("El ERROR ES: "+error);
    
    // return res.status(500).json('Internal server error');
  }

}




module.exports = {
  getIndex, 
  postIndex, 
  getW,
}