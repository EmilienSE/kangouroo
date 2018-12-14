'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'User',
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
      'User', 
      'restaurant_id'
    );
  }
};