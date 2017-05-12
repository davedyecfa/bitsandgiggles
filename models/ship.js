// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Ship = sequelize.define("ship", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  shipname: Sequelize.STRING,
  // the character's role (a string)
  health: Sequelize.INTEGER,
  // the character's age (a string)
  railgun: Sequelize.INTEGER,
  // and the character's force points (an int)
  scanner: Sequelize.INTEGER,
  // and the character's force points (an int)
  crew: Sequelize.INTEGER
}, {
  timestamps: false
});

// Syncs with DB
Ship.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Ship;