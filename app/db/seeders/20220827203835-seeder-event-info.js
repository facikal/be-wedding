'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EventInfos', [{
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

    }], {});
  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('EventInfos', null, {});

  }
};
