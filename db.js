const { Sequelize } = require('sequelize');

const datosModel = require('./models/datos')



    const sequelize = new Sequelize('railway', 'root', 'fEBgCcD5B5aeFaa6fe-EgaCCc6F-24C2', {
       host: 'roundhouse.proxy.rlwy.net',
      dialect: 'mysql' ,
      define: { 
          timestamps: false
      }
    })

  const Datos = datosModel(sequelize, Sequelize);
  

  sequelize.sync({force: false})
  .then(()=>{
      console.log("tablas sincronizadas")
  })

 
  module.exports ={
      Datos
  }