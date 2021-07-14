const index_Validacion_post = async (req, res) => {
    const { firstname, lastname, telefono, celular, email, empresa, observacion } = req.body;
    const datos= ("INSERT INTO contactanos (firstname, lastname, telefono, celular, email, empresa, observacion) VALUES ($1, $2, $3, $4, $5, $6, $7)");
    const values= [firstname, lastname, telefono, celular, email, empresa, observacion ];
    console.log(req.body);
  
    await pool.query(datos, values, (req, res) => {
      const errors = validationResult(req);
      const validacionesErrores = errors.array();
      const valores = req.body;
      if(!errors.isEmpty()){
        res.render("index.ejs", {
         validacionesErrores: validacionesErrores,
         valores: valores,
         alertPosition: 'bottom',
         alertTitle: validacionesErrores,
         alertIcon: "warning",
         showConfirmButton: false,
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
         timer: 2500,
         ruta: "/",
       });
      }
    });
  
  };