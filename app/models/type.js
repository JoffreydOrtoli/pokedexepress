const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

class Type extends Model {}

Type.init({

    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
  name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
          notEmpty: true,
      },
  },
  color: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
          notEmpty: true,
      },
  },
},
{
    sequelize,
    tableName: "type",
}
);

module.exports = Type;