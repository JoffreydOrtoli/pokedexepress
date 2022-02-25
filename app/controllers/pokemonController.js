const { Pokemon, Type } = require("../models");

const pokemonController = {

    async detailpokemon(req, res) {
        try {
            const askedPokemon = req.params.id;
            const foundPokemon = await Pokemon.findByPk(askedPokemon, {
                include: ["types"]
            });
            res.render('detailpokemon', {
                foundPokemon,
                types: foundPokemon.types
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    },

    async listeOfTypes(req, res) {
        try {
            const allTypes = await Type.findAll();
            res.render('listeoftypes', { allTypes });
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    },

    async typeChoice(req, res) {
        try {
            const askedType = req.params.id;
            const foundType = await Type.findByPk(askedType, {
                include: ["pokemons"]
            });
            res.render('pagetypechoice', { foundType, pokemons: foundType.pokemons });
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    }
};

module.exports = pokemonController;