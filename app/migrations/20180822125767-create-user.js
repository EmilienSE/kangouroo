'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Product',
      'restaurant_id',
      {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'Restaurant',
          key: 'id'
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Product', 
      'restaurant_id'
    );
  }
};