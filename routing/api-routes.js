// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Ship = require("../models/Ship.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific ship (or all ships) then provides JSON
  app.get("/api/:Ship?", function(req, res) {

    // If the user provides a specific ship in the URL...
    if (req.params.Ship) {

      // Then display the JSON for ONLY that ship.
      // (Note how we're using the ORM here to run our searches)
      Ship.findOne({
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
      Ship.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new ship...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var ship = req.body;

    // Create a routeName
    var routeName = ship.name.replace(/\s+/g, "").toLowerCase();

    // Then add the ship to the database using sequelize
    ship.create({
      routeName: routeName,
      shipname: ship.shipname,
      health: ship.health,
      railgun: ship.railgun,
      scanner: ship.scanner,
      crew: ship.crew,
      location: ship.location
    });

  });
};
