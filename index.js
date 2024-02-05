'use strict'
var app = require('./app');
var port = 3902;//puerto para aplicacion





    app.listen(process.env.PORT || port);

    console.log("cargando servidor listo", port);