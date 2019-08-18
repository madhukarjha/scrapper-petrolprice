'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetrolPrice = sequelize.define('PetrolPrice', {
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    price: DataTypes.STRING,
    dt: DataTypes.STRING
  }, {});
  PetrolPrice.associate = function(models) {
    // associations can be defined here
  };
  return PetrolPrice;
};