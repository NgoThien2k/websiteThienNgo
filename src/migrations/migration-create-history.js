'use strict';
module.exports = {
  //addColumn
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('histories', {
        // patientID: DataTypes.INTEGER,
        // doctorID: DataTypes.INTEGER,
        // description: DataTypes.TEXT,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientID: {
        type: Sequelize.INTEGER
      },
      doctorID: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },  
      file: {
        type: Sequelize.TEXT
      },  
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('histories');
  }
};