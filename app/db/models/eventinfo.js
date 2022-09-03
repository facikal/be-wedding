'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EventInfo.belongsTo(models.User)

    }
  }
  EventInfo.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    dateAkad: DataTypes.DATE,
    locAkad: DataTypes.STRING,
    addressAkad: DataTypes.TEXT,
    dateResepsi: DataTypes.DATE,
    locResepsi: DataTypes.STRING,
    addressResepsi: DataTypes.TEXT,
    textFirstMeet: DataTypes.TEXT,
    textJadian: DataTypes.TEXT,
    textLamaran: DataTypes.TEXT,
    video: DataTypes.STRING,
    addressGift: DataTypes.TEXT,
    recieverGift: DataTypes.STRING,
    instagram: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      references: {
        model: 'Users',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'EventInfo',
  });
  return EventInfo;
};