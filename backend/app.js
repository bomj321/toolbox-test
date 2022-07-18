"use strict";

// Charge node modules
var express = require("express");
var bodyParser = require("body-parser");

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var toolbox_routes = require("./routes/toolbox");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Charging routes
app.use("/api", toolbox_routes);

// Export module
module.exports = app;
