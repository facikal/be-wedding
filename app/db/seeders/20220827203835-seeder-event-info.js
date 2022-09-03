'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EventInfos', [{
      uuid: "123455asdas",
      dateAkad: new Date("Aug 31, 2022 12:30:00"),
      locAkad: "asdasd",
      addressAkad: "asdasd",
      dateResepsi: new Date("Aug 31, 2022 12:30:00"),
      locResepsi: "asdasd",
      addressResepsi: "asdasd",
      textFirstMeet: "asdasd",
      textJadian: "asdasd",
      textLamaran: "asdasd",
      video: "sadasd",
      addressGift: "asdasd",
      recieverGift: "asdasd",
      instagram: "asdasd",
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('EventInfos', null, {});

  }
};
