const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

class Type extends Model {}

Type.init(
  {
    name: DataTypes.TEXT,
    color: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "type",
  },
);

module.exports = Type;
