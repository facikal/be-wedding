'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Eventinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      dateAkad: {
        type: Sequelize.DATE
      },
      locAkad: {
        type: Sequelize.STRING
      },
      addressAkad: {
        type: Sequelize.TEXT
      },
      dateResepsi: {
        type: Sequelize.DATE
      },
      locResepsi: {
        type: Sequelize.STRING
      },
      addressResepsi: {
        type: Sequelize.TEXT
      },
      textFirstMeet: {
        type: Sequelize.TEXT
      },
      textJadian: {
        type: Sequelize.TEXT
      },
      textLamaran: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.STRING
      },
      addressGift: {
        type: Sequelize.TEXT
      },
      recieverGift: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Eventinfos');
  }
};