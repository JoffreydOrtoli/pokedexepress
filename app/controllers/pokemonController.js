const { Pokemon } = require("../models");

const pokemonController = {

    async getAllOnPokemon(req, res) {
        try {
            const allPokemon = await Pokemon.findAll();
            res.json(allPokemon);
          } catch (error) {
            console.error(error);
            res.status(500).send("error");
          }
    },

    async getOnPokemon(req, res) {
        const askedPokemon = req.params.pokemon_id;
        try {
            const foundPokemon = await Pokemon.findByPk(askedPokemon, {
                include: ["types"]
            });
            res.json(foundPokemon);
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    }
    
};

module.exports = pokemonController;