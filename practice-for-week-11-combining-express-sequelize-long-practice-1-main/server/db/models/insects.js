"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insects.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          titleCased(value) {
            if (
              value.split(" ").some((name) => name[0] !== name[0].toUpperCase())
            ) {
              throw new Error("name must Title Cased");
            }
          },
        },
      },
      description: DataTypes.STRING,
      territory: DataTypes.STRING,
      fact: {
        type: DataTypes.STRING(240),
        validate: {
          maxChars(value) {
            if (value.length > 240) {
              throw new Error("'fact' must be less than 240 characters");
            }
          },
        },
      },
      millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: "Insects",
    }
  );
  return Insects;
};
