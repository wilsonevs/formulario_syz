const app = require("./config/app");

const rutas= require('./app/routers/router.js');
rutas(app);

app.listen(app.get('port'), () => {
    console.log('Servidor activo, en el puerto:', app.get('port'));
});