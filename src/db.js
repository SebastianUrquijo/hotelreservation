//Instancia de la base de datos - Sequelize
const {Sequelize} = require('sequelize');

//Conexion a la base de datos
const db = new Sequelize('hotelreservation','postgres','La8maravill@',{
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: false,
    native: false,
    define: {
    timestamps: false
  }
});

module.exports = db