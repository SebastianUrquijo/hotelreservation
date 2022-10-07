//Instancia de la base de datos - Sequelize
const {Sequelize} = require('sequelize');
require('dotenv').config();

//Conexion a la base de datos
const db = new Sequelize(
process.env.DB_SCHEMA || 'postgres',
process.env.DB_USER || 'postgres',
process.env.DB_PASSWORD || 'postgres',
{
    host: process.env.DB_HOST || 'database',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: process.env.DB_SSL == "true"
    }
});

module.exports = db