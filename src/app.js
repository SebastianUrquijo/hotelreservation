const express = require('express');
const morgan = require('morgan');
const routes = require("./routes/index.js");
var path = require('path');

const URL_LINK = "http://localhost:3000";

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true}));
server.use(express.json());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, 'public')));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', URL_LINK); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Capturar errores.
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;