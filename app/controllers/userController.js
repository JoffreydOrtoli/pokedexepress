require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const { User } = require("../models");

const userController = {
  async userLogin(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });

      // const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
      if (!user) {
        res.status(401).send("invalid credentials");
        return;
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        res.status(401).send("invalid credentials");
        return;
      }
      user.password = null;
      const accesToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "3600s" },
      );
      res.json({ user, accesToken });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createUser(req, res) {
    const {
      lastname, firstname, email, password, passwordConfirm,
    } = req.body;
    if (req.body.password !== req.body.passwordConfirm) {
      return res.json("passwordNotMatch");
    }
    if (!emailValidator.validate(req.body.email)) {
      return res.json("emailNotCorrect");
    }
    const cryptedPassword = bcrypt.hashSync(password, 10);
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        const userCreated = await User.create({
          firstname,
          lastname,
          email,
          password: cryptedPassword,
        });
        return res.json(userCreated);
      }
      return res.json("errorCreateAccount");
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async updateUser(req, res) {
    const userId = req.params.user_id;
    const { lastname, firstname, email } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (user) {
        const updateUser = await user.update({ lastname, firstname, email });
        res.json(updateUser);
      } else {
        res.status(404).json("User non modifié");
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  async deleteUser(req, res) {
    const userId = req.params.user_id;
    const foundUser = await User.findByPk(userId);
    if (foundUser) {
      await foundUser.destroy();
      res.json("done");
    } else {
      res.status(404).json("CkCé!!!");
    }
  },

  userLogOut(req, res) {
    delete req.user;
    res.json("done");
  },
};

module.exports = userController;