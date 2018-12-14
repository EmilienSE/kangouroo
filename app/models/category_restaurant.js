'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category_restaurant = sequelize.define('Category_restaurant', {
    name: DataTypes.STRING
  }, {});
  return Category_restaurant;
};