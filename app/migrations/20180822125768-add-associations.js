'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Product',
      'category_product_id',
      {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'Category_product',
          key: 'id'
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Product', 
      'category_product_id'
    );
  }
};