const { User } = require("../models");

const deckController = {
  async deckPage(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id, { include: "pokemons" });
      res.json(user.pokemons);
    } catch (error) {
      next(error);
    }
  },

  async addPokemon(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id, { include: "pokemons" });
      const userArray = [];
      user.pokemons.forEach((pokemon) => {
        userArray.push(pokemon);
      });
      const pokemon = req.params.id;
      if (!user) {
        return next();
      }
      if (!pokemon) {
        return next();
      }
      if (userArray.length <= 5) {
        await user.addPokemon(pokemon);
        await user.reload();
        return res.json(user);
      }
    } catch (error) {
      return next(error);
    }
  },

  async removePokemon(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id, { include: "pokemons" });
      if (!user) {
        return next();
      }
      const pokemon = req.params.id;
      if (!pokemon) {
        return next();
      }
      await user.removePokemon(pokemon);
      await user.reload();
      return res.json(user);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = deckController;
