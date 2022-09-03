'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: "fadhil1999@gmail.com",
      password: "1234",
      confPassword: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
