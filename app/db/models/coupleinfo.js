'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoupleInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CoupleInfo.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  CoupleInfo.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    gender: DataTypes.STRING,
    full: DataTypes.STRING,
    nick: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    child: DataTypes.STRING,
    father: DataTypes.STRING,
    mother: DataTypes.STRING,
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
    modelName: 'CoupleInfo',
  });
  return CoupleInfo;
};