'use strict';
module.exports = (sequelize, DataTypes) => {
  var AboutSection = sequelize.define('AboutSection', {
    title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
  }, {});
  AboutSection.associate = function(models) {
    // associations can be defined here
  };
  return AboutSection;
};
