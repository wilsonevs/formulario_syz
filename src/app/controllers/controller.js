const {validationResult } = require ("express-validator");
const pool = require("../../config/connectionDb");

const getIndex = (req, res) => {
    res.render("index.ejs");
}


const index_Post = async (req, res) => {
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
    pool.query(querys, results =>{
      res.render("prueba.ejs", {
        datos: results,
      })
    })

  } catch (error) {
    console.log("El ERROR ES: "+error);
    
    // return res.status(500).json('Internal server error');
  }

}


const index_Validacion_post = (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   res.status(400).json({ errors: errors.array() });
  //   console.log(errors)
  // };

   const errors = validationResult(req);
   if(!errors.isEmpty()){
     console.log(req.body);
     const valores = req.body;
     const validacionesErrores = errors.array();
     res.render("index.ejs", {
      validacionesErrores: validacionesErrores,
      valores: valores,
       alertPosition: 'bottom',
       alertTitle: validacionesErrores,
       alertIcon: "warning",
       showConfirmButton: true,
       timer: 2500,
       ruta: "/",
      });
   }else{
    res.render("index.ejs", {
      alert: true,
      alertPosition: 'center',
      alertIcon: "success",
      alertTitle: "Enviado",
      showConfirmButton: false,
      timer: false,
      ruta: "/",
    });
   }
  
};






module.exports = {
  getIndex, 
  index_Post, 
  index_Validacion_post,
  getW,
}