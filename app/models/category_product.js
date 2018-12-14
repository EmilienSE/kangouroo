'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category_product = sequelize.define('Category_product', {
    name: DataTypes.STRING
  }, {});
  return Category_product;
};