const { Type } = require("../models");

const typeController = {
  async getAllType(_, res) {
    try {
      const allType = await Type.findAll();
      res.json(allType);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async GetAllPokemonFromOneType(req, res) {
    try {
      const askedType = req.params.type_id;
      const foundType = await Type.findByPk(askedType, {
        include: ["pokemons"],
      });
      res.json(foundType);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = typeController;
