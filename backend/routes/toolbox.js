"use strict";

var express = require("express");
var ToolboxController = require("../controllers/toolbox");
var router = express.Router();

// Routes
router.get("/files", ToolboxController.files);

module.exports = router;
