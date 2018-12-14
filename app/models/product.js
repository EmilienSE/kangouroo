'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    models.Product.belongsTo(models.Restaurant, {
      as: 'restaurant',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Product.belongsTo(models.Category_product, {
      as: 'category_product',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Product;
};