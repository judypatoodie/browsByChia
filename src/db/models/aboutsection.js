'use strict';
module.exports = (sequelize, DataTypes) => {
  var AboutSection = sequelize.define('AboutSection', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  AboutSection.associate = function(models) {
    // associations can be defined here
  };
  return AboutSection;
};