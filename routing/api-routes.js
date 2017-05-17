// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models/index.js");
// var db = require("../config/connection.js")

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific ship (or all ships) then provides JSON
  app.get("/api/:Ship?", function(req, res) {

    // If the user provides a specific ship in the URL...
    if (req.params.Ship) {

      // Then display the JSON for ONLY that ship.
      // (Note how we're using the ORM here to run our searches)
      db.Ship.findOne({
        where: {
          routeName: req.params.Ship
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the ships.
      // (Note how we're using Sequelize here to run our searches)
      db.Ship.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new ship...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var newShip = req.body;

    // Create a routeName
    var routeName = newShip.shipname.replace(/\s+/g, "").toLowerCase();

    // Then add the ship to the database using sequelize
    db.Ship.create({
      shipName: newShip.shipname,
      health: newShip.health,
      railgun: newShip.railgun,
      scanner: newShip.scanner,
      crew: newShip.crew,
      location: newShip.location
    });

  });
};
