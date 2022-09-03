'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments',
      [
        {
          nama: 'John Doe',
          ucapan: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, excepturi.',
          kehadiran: 'Hadir',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: 'Kalis Doe',
          ucapan: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, excepturi.',
          kehadiran: 'Tidak Hadir',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: 'Magang Doe',
          ucapan: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, excepturi.',
          kehadiran: 'Masih Ragu',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
