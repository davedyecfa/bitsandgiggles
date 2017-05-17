// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var sequelize = require("sequelize");
var path = require("path");
var mysql = require("mysql");
var db = require("./models/index.js");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, "public")));


// Routes
// =============================================================
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});