const { Pokemon } = require("../models");

const pokemonController = {

    async getAllOnPokemon(req, res) {
        try {
            const allPokemon = await Pokemon.findAll({ include: ["types"] });
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
    },

    async createPokemon(req, res) {
        const { name, pv, attack, defense, attack_spe, defense_spe, speed } = req.body;
        try {
            const pokemon = await Pokemon.findOne( { where : {name: req.body.name}});
            if (!pokemon) {
                const createPokemon = await Pokemon.create({ name, pv, attack, defense, attack_spe, defense_spe, speed });
                res.json(createPokemon);
            }
            else {
                res.status(400).json("Erreur Pokemon non trouvé");
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async updatePokemon(req, res) {
        const pokemonId = req.params.pokemon_id;
        const { name, pv, attack, defense, attack_spe, defense_spe, speed } = req.body;
        try {
            const pokemon = await Pokemon.findByPk(pokemonId);
            if (pokemon) {
                const updatePokemon = await pokemon.update({ name, pv, attack, defense, attack_spe, defense_spe, speed });
                res.json(updatePokemon);
            }
            else {
                res.status(404).json("Pokemon non modifié");
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async deletePokemon(req, res) {
        const pokemonId = req.params.pokemon_id;
        try {
            const foundPokemon = await Pokemon.findByPk(pokemonId);
            if (foundPokemon) {
                await foundPokemon.destroy();
                res.json("done");
            } else {
                    res.status(404).json('CkCé!!!');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }
    
};

module.exports = pokemonController;