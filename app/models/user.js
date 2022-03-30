const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/sequelize");

class User extends Model {
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
User.init(
  {
    firstname: DataTypes.TEXT,
    lastname: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "user",
  },
);

module.exports = User;
