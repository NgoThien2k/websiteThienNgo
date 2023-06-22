'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email:'admin@gmail.com',
      password: '123456', //plan text ,,, jfdkshs -> hash password
      firstName: 'Ngô',
      lastName: 'Thiện',
      address:'VN',
      gender:1,
      typeRole:'ROLE',
      keyRole:'R1',

      
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  // rollback
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
