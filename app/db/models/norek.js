'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Norek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Norek.belongsTo(models.User)
    }
  }
  Norek.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    bank: DataTypes.STRING,
    name: DataTypes.STRING,
    number: DataTypes.STRING,
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
    modelName: 'Norek',
  });
  return Norek;
};