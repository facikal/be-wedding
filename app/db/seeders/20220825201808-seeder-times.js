'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Times',
      [
        {
          resepsi: new Date("Sept 10, 2022 12:30:00"),
          akad: new Date("Aug 31, 2022 12:30:00")
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Times', null, {});
  }
};
