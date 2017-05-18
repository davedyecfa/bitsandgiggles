module.exports = function(sequelize, DataTypes) {
  var SpacePirate = sequelize.define("SpacePirate", {
    pirateName: {
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
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  }, {
    timestamps: false
  });
  return SpacePirate;
};