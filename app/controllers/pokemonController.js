const { Pokemon } = require("../models");

const pokemonController = {
  async getAllPokemon(_, res) {
    try {
      const allPokemons = await Pokemon.findAll({ include: ["types"] });
      res.json(allPokemons);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },

  async getOnPokemon(req, res) {
    const askedPokemon = req.params.pokemon_id;
    try {
      const foundPokemon = await Pokemon.findByPk(askedPokemon, {
        include: ["types"],
      });
      res.json(foundPokemon);
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  },
};

module.exports = pokemonController;
