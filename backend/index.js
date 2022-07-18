"use strict";

var app = require("./app");
var port = 3900;

// Create server
app.listen(port, () => {
  console.log("Servidor corriendo en http://localhost:" + port);
});
