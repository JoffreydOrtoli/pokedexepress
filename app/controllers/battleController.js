const { Pokemon } = require("../models");
const sequelize = require("../db/sequelize");

const battleController = {
  async battlePage(req, res) {
    if (!req.user) {
      return res.redirect("/login");
    }
    const randomPokemon = [];
    return res.json(randomPokemon);
  },

  async battleBots(req, res) {
    if (!req.user) {
      return res.redirect("/login");
    }
    try {
      const randomPokemon = await Pokemon.findAll({
        order: sequelize.random(),
        limit: 2,
      });
      return res.json(randomPokemon);
    } catch (error) {
      console.error(error);
      return res.status(500).send("error");
    }
  },
};

module.exports = battleController;
