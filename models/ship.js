module.exports = function(sequelize, DataTypes) {
  var Ship = sequelize.define("Ship", {
    shipName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    railgun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scanner: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crew: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  return Ship;
};