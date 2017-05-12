// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Spacepirate = sequelize.define("spacepirate", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  priatename: Sequelize.STRING,
  // the character's role (a string)
  health: Sequelize.INTEGER,
  // the character's age (a string)
  railgun: Sequelize.INTEGER,
  // the character's age (a string)
  location: Sequelize.STRING
}, {
  timestamps: false
});

// Syncs with DB
Spacepirate.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Spacepirate;