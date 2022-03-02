const { Pokemon, Type } = require("../models");

const mainController = {
  async homePage(req, res) {
    try {
      const allPokemon = await Pokemon.findAll();
      res.json(allPokemon);
    } catch (error) {
      console.error(error);
      res.status(500).send("error");
    }
  },
};

module.exports = mainController;