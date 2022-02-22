const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize");

class User extends Model {
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
User.init(
  {
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },

    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
  },
    
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.TEXT,
    }
  },
  {
    sequelize,
    tableName: "user",
  }
);

module.exports = User;