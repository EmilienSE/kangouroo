'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    models.Restaurant.belongsTo(models.Category_restaurant, {
      as: 'category_restaurant',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
    models.Restaurant.hasMany(models.Product);
  };
  return Restaurant;
};