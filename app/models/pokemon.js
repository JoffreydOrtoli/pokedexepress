const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

class Pokemon extends Model {}

Pokemon.init(
  {
    name: DataTypes.TEXT,
    pv: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    attack_spe: DataTypes.INTEGER,
    defense_spe: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: "pokemon",
  }
);

module.exports = Pokemon;
